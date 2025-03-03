import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

import * as controllers from "./controllers/books.controllers.ts";

const router = new Router();
router.get("/books", (ctx) => {
  ctx.response.body = controllers.findAll();
});
router.get("/books/:id", (ctx) => {
  const id = parseInt(ctx.params.id);
  const book = controllers.getById(id);
  if (book) {
    ctx.response.body = book;
  } else {
    ctx.response.status = 404;
    ctx.response.body = { message: "Book not found with this id" };
  }
});
router.post("/books", async (ctx) => {
  const book  = await ctx.request.body.json();
  ctx.response.body = controllers.create(book);
  ctx.response.status = 201;
});
router.put("/books/:id", async(ctx) => {
  const book = await ctx.request.body.json();
  const id = parseInt(ctx.params.id);
  controllers.update(id, book);
  ctx.response.body = { message: "Book updated successfully" };
  ctx.response.status = 200;
});

router.delete("/books/:id", (ctx) => {
  const id = parseInt(ctx.params.id);
  controllers.remove(id);
  ctx.response.body = { message: "Book deleted successfully" };
  ctx.response.status = 200;
});
const app = new Application();
const port = 8000;

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on http://localhost:${port}`);

app.listen({ port: port });

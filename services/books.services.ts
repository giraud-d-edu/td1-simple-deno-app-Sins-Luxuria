import * as repo from '../repositories/books.repository.ts';
import { Book } from '../models/books.model.ts';

export function findAll(): Book[] {
    return repo.getAllBooks();
}

export function getById(id: number): Book {
    return repo.getBookById(id);
}

export function create(book: Book) {
    return repo.createBook(book);
}

export function update(id: number, book: Book) {
    return repo.updateBook(id, book);
}

export function remove(id: number) {
    return repo.deleteBook(id);
}

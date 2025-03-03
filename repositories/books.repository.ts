import { Book } from '../models/books.model.ts';

const books: Book[] = [
    { id: 1, titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", isbn: "978-0618260263", datePublication: "1954-07-29" },
    { id: 2, titre: "Orgueil et Préjugés", auteur: "Jane Austen", isbn: "978-0141439518", datePublication: "1813-01-28" },
];

export function getAllBooks(): Book[] {
    if (books.length === 0) {
        throw new Error('No books found');
    }
    else {
        return books;    
    }
}
export function getBookById(id: number): Book{
    const book = books.find(book => book.id === id);
    if (book) {
        return book;
    
    } else {
     throw new Error('No books found with id ' + id);
    }   
}

export function createBook(book: Book) {
    const index = books.length;
    book.id = index + 1;
    return books.push(book);
}

export function updateBook(id:number, book: Book) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = book;
    } else {
        throw new Error('No books with id ' + id + ' found');
    }
}

export function deleteBook(id: number) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
    } else {
        throw new Error('No books with id ' + id + ' found');
    }
}
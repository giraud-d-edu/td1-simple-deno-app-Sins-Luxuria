import * as service from '../services/books.services.ts';
import { Book } from '../models/books.model.ts';

export function findAll(): Book[] {
    return service.findAll();
}

export function getById(id: number): Book {
    return service.getById(id);
}

export function create(book: Book) {
    return service.create(book);
}

export function update(id: number, book: Book) {
    return service.update(id, book);
}

export function remove(id: number) {
    return service.remove(id);
}
import { Injectable, signal } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  author: string;
  pages: number;
}

@Injectable({ providedIn: 'root' })
export class BookService {
  private books = signal<Book[]>([
    { id: 1, title: 'Кобзар', author: 'Тарас Шевченко', pages: 400 },
    { id: 2, title: '1984', author: 'Джордж Орвелл', pages: 320 },
    { id: 3, title: 'Гобіт', author: 'Дж. Р. Р. Толкін', pages: 300 }
  ]);

  private nextId = 4;

  getBooks() {
    return this.books.asReadonly();
  }

  addBook(title: string, author: string, pages: number): void {
    const newBook: Book = {
      id: this.nextId++,
      title,
      author,
      pages
    };

    this.books.update(current => [...current, newBook]);
  }

  removeBook(id: number): void {
    this.books.update(current => current.filter(book => book.id !== id));
  }
}
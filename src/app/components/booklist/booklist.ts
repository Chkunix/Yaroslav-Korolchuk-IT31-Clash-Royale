import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-booklist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booklist.html',
  styleUrl: './booklist.css'
})
export class Booklist {
  books: ReturnType<BookService['getBooks']>;

  title = '';
  author = '';
  pages: number | null = null;

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  onAddBook(): void {
    if (!this.title.trim() || !this.author.trim() || !this.pages) {
      return;
    }

    this.bookService.addBook(this.title, this.author, this.pages);

    this.title = '';
    this.author = '';
    this.pages = null;
  }

  onRemoveBook(id: number): void {
    this.bookService.removeBook(id);
  }
}
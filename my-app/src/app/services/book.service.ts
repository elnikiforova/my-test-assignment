import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    {
      id: 123,
      title: 'Illyad',
      author: 'Homer',
      pageCount: 500,
      date: '500 BC'
    },
    {
      id: 124,
      title: 'Oddisey',
      author: 'Homer',
      pageCount: 500,
      date: '500 BC'
    },
  ];

  constructor() { }

  getBooks() {
    return this.books;
  }
}

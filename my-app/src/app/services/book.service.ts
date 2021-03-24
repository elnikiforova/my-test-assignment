// сервис для запроса книг из компонента список книг

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BookActions from '../actions/book.actions';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books = store.select('book');
  }

  getBooks(): Observable<Book[]> {
    return this.books;
  }

  delBook(id: number) {

    this.store.dispatch(new BookActions.RemoveBook(id));
  }
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
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
}

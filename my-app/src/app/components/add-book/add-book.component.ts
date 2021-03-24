// компонент добавления новой книги
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../../models/book.model';
import { AppState } from '../../app.state';
import * as BookActions from '../../actions/book.actions';
import { Classes } from '../../../classes.config';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html'
})
export class AddBookComponent implements OnInit {
  classRoot = Classes.ADD_BOOK_ROOT;
  classInput = Classes.ADD_BOOK_INPUT;
  classBtn = Classes.ADD_BOOK_BTN;
  book: Book;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.book = {
      id: 0,
      title: '',
      author: '',
      pageCount: 0,
      date: ''
    }
  }

  addBook(title, author, pageCount, date) {
    this.store.dispatch(new BookActions.AddBook({
      id: Math.floor(Math.random() * 100),
      title: title,
      author: author,
      pageCount: pageCount,
      date: date
    }))
  }
}

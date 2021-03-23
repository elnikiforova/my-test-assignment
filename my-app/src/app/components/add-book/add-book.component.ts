import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../../models/book.model';
import { AppState } from '../../app.state';
import * as BookActions from '../../actions/book.actions';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html'
})
export class AddBookComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addBook(title, author, pageCount, date) {
    this.store.dispatch(new BookActions.AddBook({
      id: Math.floor(Math.random() * 100),
      title: title,
      author: author,
      pageCount: pageCount,
      date: date
    }))
  }

  ngOnInit(): void {
  }

}

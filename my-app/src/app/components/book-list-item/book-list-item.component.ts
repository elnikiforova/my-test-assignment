import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../../models/book.model';
import { AppState } from '../../app.state';
import * as BookActions from '../../actions/book.actions';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html'
})
export class BookListItemComponent implements OnInit {
  @Input() book: Book;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  delBook() {
    console.log('hey', this.book.id);
    this.store.dispatch(new BookActions.RemoveBook(this.book.id));
  }

}

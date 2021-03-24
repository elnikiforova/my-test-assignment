// компонент элемент из спика книг

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../../models/book.model';
import { AppState } from '../../app.state';
import * as BookActions from '../../actions/book.actions';
import { BookService } from '../../services/book.service';
import { ModalService } from '../../services/modal.service';
import { Classes } from '../../../classes.config';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html'
})
export class BookListItemComponent implements OnInit {
  classRoot = Classes.BOOK_LIST_ITEM;
  classEditBtn = Classes.EDIT_BOOK_BTN;
  classDelBtn = Classes.REMOVE_BOOK_BTN;
  classText = Classes.SEMIBOLD_TEXT;

  @Input() book: Book;
  @Output() delBook: EventEmitter<Book> = new EventEmitter();

  constructor(private store: Store<AppState>, private bookService: BookService, private modalService: ModalService) { }

  ngOnInit(): void {
  }

  onDelete(book) {
    this.delBook.emit(book);
  }

  openModal() {
    this.modalService.open('edit-book-modal', this.book);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

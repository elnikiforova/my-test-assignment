// модальное окно для редактирования книг
import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';
import { BookService } from '../../services/book.service';
import * as BookActions from '../../actions/book.actions';
import { Book } from 'src/app/models/book.model';
import { ModalService } from '../../services/modal.service';
import { Classes } from '../../../classes.config';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EditBookComponent implements OnInit {
  classRoot = Classes.ADD_BOOK_ROOT;
  classInput = Classes.ADD_BOOK_INPUT;
  classBtn = Classes.ADD_BOOK_BTN;

  books: Book[];

  @Input() book: Book;
  @Input() id: string;
  private element: any;

  constructor(private store: Store<AppState>, private bookService: BookService, private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // get all books
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });

    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', el => {
      if (el.target.className === 'jw-modal' || el.target.classList.contains('add-book-close')) {
        this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // open modal
  open(book?): void {
    if (book) {
      this.book = book;
    }
    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }

  editBook(title, author, pageCount, date) {
    this.store.dispatch(new BookActions.EditBook({
      id: this.book.id,
      title,
      author,
      pageCount,
      date
    }));
  }

}

// модальное окно для добавления новой книги
import { Component, OnInit, ViewEncapsulation, ElementRef, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../../models/book.model';
import { AppState } from '../../app.state';
import * as BookActions from '../../actions/book.actions';
import { ModalService } from '../../services/modal.service';
import { Classes } from '../../../classes.config';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['add-book.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AddBookComponent implements OnInit {
  classInput = Classes.ADD_BOOK_INPUT;
  classBtn = Classes.ADD_BOOK_BTN;

  book: Book;
  @Input() id: string;
  private element: any;

  constructor(private store: Store<AppState>, private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
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
  open(): void {
    this.book = {
      id: 0,
      title: '',
      author: '',
      pageCount: 0,
      date: ''
    }

    this.element.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }

  addBook(title, author, pageCount, date) {
    this.store.dispatch(new BookActions.AddBook({
      id: Math.floor(Math.random() * 100),
      title: title,
      author: author,
      pageCount: pageCount,
      date: date
    }))

    this.book = {
      id: 0,
      title: '',
      author: '',
      pageCount: 0,
      date: ''
    }
  }
}

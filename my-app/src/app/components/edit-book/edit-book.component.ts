import { Component, OnInit, ViewEncapsulation, OnDestroy, Input, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';
import * as BookActions from '../../actions/book.actions';
import { Book } from 'src/app/models/book.model';
import { ModalService } from '../../_modal/modal.service';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EditBookComponent implements OnInit, OnDestroy {
  @Input() book: Book;
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
      if (el.target.className === 'jw-modal' || el.target.className == 'add-book-close') {
        this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(book): void {
    this.book = book;
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

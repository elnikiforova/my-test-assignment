// компонент список книг

import { ClassSansProvider, Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { ModalService } from '../../_modal';
import { Classes } from '../../../classes.config';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  classBtn = Classes.ADD_BTN;
  classBtnX = Classes.MODAL_X_BTN;
  
  books: Book[];

  constructor(private bookService: BookService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

// компонент список книг
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { ModalService } from '../../services/modal.service';
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

  delBook(book: Book) {
    // delete from UI
    this.books = this.books.filter(el => el.id !== book.id);
    // delete from state
    this.bookService.delBook(book.id);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

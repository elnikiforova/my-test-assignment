import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
// import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    {
      id: 123,
      title: 'Illyad',
      author: 'Homer',
      pageCount: 500,
      date: '500 BC'
    },
    {
      id: 124,
      title: 'Oddisey',
      author: 'Homer',
      pageCount: 500,
      date: '500 BC'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}

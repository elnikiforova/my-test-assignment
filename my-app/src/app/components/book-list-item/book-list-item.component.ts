import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
  }

}

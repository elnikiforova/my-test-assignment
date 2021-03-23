import { Action } from '@ngrx/store';
import {Book} from '../models/book.model';
import * as BookActions from '../actions/book.actions';

const initialState: Book = {
  id: 125,
  title: 'Initial Book',
  author: 'Homer',
  pageCount: 500,
  date: '545 BC'
}

export function BookReducer (state: Book[] = [initialState], action: BookActions.Actions) {
  switch(action.type) {
    case BookActions.ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
}

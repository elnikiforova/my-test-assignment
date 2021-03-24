// reducer для ngrx state

import { Book } from '../models/book.model';
import * as BookActions from '../actions/book.actions';

const initialState: Book = {
  id: 125,
  title: 'Illyad',
  author: 'Homer',
  pageCount: 500,
  date: '545 BC'
}

export function BookReducer(state: Book[] = [initialState], action: BookActions.Actions) {
  switch (action.type) {
    case BookActions.ADD_BOOK:
      return [...state, action.payload];
    case BookActions.REMOVE_BOOK:
      return state.filter(el => el.id !== action.payload);
    case BookActions.EDIT_BOOK:
      return state.map(el => el.id === action.payload.id ? action.payload : el);
    default:
      return state;
  }
}

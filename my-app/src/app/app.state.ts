import { Book } from './models/book.model';

export interface AppState {
  readonly book: Book[];
}

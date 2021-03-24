import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { BookReducer } from './reducers/book.reducer';
import { storageMetaReducer } from './reducers/storage.metareducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      book: BookReducer
    }, {
      metaReducers: [storageMetaReducer]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

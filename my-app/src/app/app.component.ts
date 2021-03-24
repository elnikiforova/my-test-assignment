import { Component } from '@angular/core';
import { Classes } from '../classes.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'my-app';
  classRoot = Classes.APP_ROOT;
  classH1 = Classes.H_1;
}

import { Component } from '@angular/core';

import './rxjs-operators';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: [`
    .site {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }
    .site-content {
      flex: 1 0 auto;
    }
  `]
})

export class AppComponent {

}
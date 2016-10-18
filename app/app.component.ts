import { Component } from '@angular/core';

import './rxjs-operators';

@Component({
	selector: 'my-app',
	template: `
    <nav>
      <div class="nav-wrapper">
        <a routerLink="/home" class="brand-logo right">Contacts</a>
        <ul id="nav-mobile" class="left">
        <li>
          <a routerLink="/home">Home</a>
        </li>
        <li>
          <a routerLink="/contacts">Contacts</a>
         </li>
        </ul>
      </div>
    </nav>

    <router-outlet></router-outlet>
    `

})

export class AppComponent {

}
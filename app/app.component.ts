import { Component } from '@angular/core';

import './rxjs-operators';

@Component({
	selector: 'my-app',
	template: `
		<h1>Contacts</h1>
    <a routerLink="/home">Home</a>
    <a routerLink="/contacts">Contacts</a>
    <router-outlet></router-outlet>
		`

})

export class AppComponent {

}
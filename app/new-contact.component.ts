//form to add new contacts
import { Component } from '@angular/core';

import { Contact } from './contact';

@Component({
	moduleId: module.id,
	selector: 'add-contact',
	templateUrl: 'new-contact.component.html'
})

export class NewContactComponent {
	newContact = {name: '', age: '', phone: ''}
	clear(){
		this.newContact = {name: '', age: '', phone: ''}
	}

	confirmation = true;

	confirm() {
		this.confirmation = false;
	}

}
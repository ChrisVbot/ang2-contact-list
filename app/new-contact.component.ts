//form to add new contacts
import { Component, Input } from '@angular/core';

import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
	moduleId: module.id,
	selector: 'add-contact',
	templateUrl: 'new-contact.component.html'
})

export class NewContactComponent {
	@Input() contacts: Contact[];
	errorMessage = null;
	newContact = {name: '', age: '', phone: ''}
	
	clear(){
		this.newContact = {name: '', age: '', phone: ''}
	}

	confirmation = true;

	confirm() {
		this.confirmation = false;
	}
	constructor(private contactService: ContactService){}

	addNewContact(contact: Contact){
		if (!contact) {return;}
		this.contactService.addContact(contact)
			.subscribe(
				contact => this.contacts.push(contact),
				error => this.errorMessage = 'Something went wrong' + error 
			)

	}


}












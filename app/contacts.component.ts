import { Component, OnInit } from '@angular/core';

import { Contact } from './contact';

import { ContactService } from './contact.service';

@Component ({
	selector: 'contacts',
	template: `
		<h2>Contact List</h2>
		<ul class="contacts">
			<li *ngFor="let contact of contacts" (click)="selectContact(contact)" >
				Name: {{contact.name}}
			</li>
		</ul>
		<contact-detail [contact]="selectedContact"></contact-detail>
	`
})

export class ContactsComponent implements OnInit {
	contacts: Contact[];

	selectedContact: Contact;

	constructor(private contactService: ContactService){
		
	}

	ngOnInit(){
		this.getContacts();
	}

	getContacts(){
		this.contacts = this.contactService.getContacts();	
	}

	selectContact(contact){
		this.selectedContact = contact;
	}
	

}






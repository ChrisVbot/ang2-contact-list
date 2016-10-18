import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Contact } from './contact';

import { ContactService } from './contact.service';

@Component ({
	selector: 'contacts',
	template: `
		<h2>Contact List</h2>
			<div class="container">
	    	<div class="row">
      		<div class="col s4 m4" *ngFor="let contact of contacts" (click)="selectContact(contact)">
        		<div class="card-panel #1976d2 blue darken-2 list">
          		<span class="white-text">{{contact?.name}}</span>
        		</div>
      		</div>
    	</div>
		</div>
		<add-contact [contacts]="contacts"></add-contact>
		<contact-search></contact-search>
	`,
	styles: [`
		.list {
			cursor: pointer;
		}
	`]
})

export class ContactsComponent implements OnInit {
	contacts: Contact[];

	selectedContact: Contact;

	constructor(
			private contactService: ContactService,
			private router: Router
		){
		
	}

	ngOnInit(): void {
		this.getContacts();
	}

	getContacts(){
		this.contactService.getContacts()
			.subscribe(contacts => this.contacts = contacts);	
	}

	selectContact(contact: Contact){
		let link = ['/contacts', contact.id];
		this.router.navigate(link)
	}


}






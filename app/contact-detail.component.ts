import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Contact } from './contact';
import { ContactService } from './contact.service';



@Component({
	selector: 'contact-detail',
	template: `
		<div *ngIf="contact">
			<h3>{{contact.name}} details</h3>
			<div>
				<label>Name: </label>
				<input [(ngModel)]="contact.name" placeholder="name"/>
			</div>
			<div>
				<label>Age: </label>
				<input [(ngModel)]="contact.age" placeholder="age"/>
			</div>
			<div>
				<label>Phone number: </label>
				<input [(ngModel)]="contact.phone" placeholder="phone number" />
			</div>
			<button type="button" (click)="update(contact)">Update</button>
			<button type="button" (click)="delete(contact)">Delete</button>
			<button type="button" (click)="back()">Go back</button>
		</div>
	`
})

export class ContactDetailComponent implements OnInit {
	contact: Contact;

	constructor(
		private contactService: ContactService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.contactService.getContactDetails(id)
				.then(contact => this.contact = contact)
		})
	}

	back() {
		this.location.back();
	}

	update(contact: Contact){
		this.contactService.update(contact)
			.then(()=> this.back())
	}

	delete(contact: Contact){
		this.contactService.deleteContact(contact)
			.then(()=> this.back())
	}
	
}
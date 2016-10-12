import { Component, Input } from '@angular/core';
import { Contact } from './contact';

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
			<button type="button" (click)="closeDetails()">Close</button>
		</div>
	`
})

export class ContactDetailComponent {
	@Input() contact: Contact;

	closeDetails() {
		this.contact = '';
	}
}
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Contact } from './shared/contact-model';

import { ContactService } from './shared/services/contact.service';


@Component ({
  moduleId: module.id,
  selector: 'contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})

export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;
  loading: boolean;

  constructor(
      private contactService: ContactService,
      private router: Router
    ){}

  ngOnInit(): void {
    this.getContacts();
    this.loading = true;
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(
        contacts => {
          this.contacts = contacts
          this.loading = false;
        },
        error => console.log(error)
      );  
  }

  selectContact(contact: Contact): void {
    let link = ['/contacts', contact.id];
    this.router.navigate(link)
  }

}






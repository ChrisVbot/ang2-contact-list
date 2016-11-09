import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from './shared/contact-model';
import { ContactService } from './shared/services/contact.service';
import { NewContactComponent } from './new-contact/new-contact.component';


@Component ({
  moduleId: module.id,
  selector: 'contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})

export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;
  @ViewChild(NewContactComponent)
  private newContactComponent: NewContactComponent;

  constructor(
      private contactService: ContactService,
      private router: Router
    ){}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(
        contacts => this.contacts = contacts,
        error => console.log(error)
      );  
  }

  selectContact(contact: Contact): void {
    let link = ['/contacts', contact.id];
    this.router.navigate(link)
  }
  
  canDeactivate(): boolean {
    if (this.newContactComponent.canDeactivate()){return true;}
    else {
      return window.confirm('Are you sure? Your unsaved changes will be lost');
    }
  }

}






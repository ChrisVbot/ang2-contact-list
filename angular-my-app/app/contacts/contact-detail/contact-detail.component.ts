import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../shared/contact-model';
import { ContactService } from '../shared/services/contact.service';

import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'contact-detail',
  templateUrl: 'contact-detail.component.html',
  styles: [`
    .required-field {
      background: #ffcdd2;
      color: #632827;
      padding: 15px;
      margin: -20px auto 20px auto;
      border-radius: 4px;
      width: 100%;
    }
  `]
})

export class ContactDetailComponent implements OnInit {
  contact: Contact;
  contactDetails: FormGroup;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.contactService.getContactDetails(id)
        .subscribe(contact => {
          this.contact = contact;
          this.populateDetails();
        })
    });
  }

  populateDetails(): void {
    this.contactDetails = this.formBuilder.group({
      id: [this.contact.id],
      name: [this.contact.name, [Validators.required]],
      age: [this.contact.age, [Validators.required]],
      phone: [this.contact.phone, [Validators.required]]
    })
  }

  goToContacts() {
    this.router.navigate(['/contacts']);
  }

  update(contact: Contact){
    this.contactService.update(contact)
      .subscribe((data)=> {
        this.contact = data;
        this.goToContacts();
      })
  }

  //TODO: implement navguard for deletions
  delete(contact: Contact){
    this.contactService.deleteContact(contact)
      .subscribe(()=> {
        if (window.confirm("Are you sure?")){
          this.contact = null;
          this.goToContacts();
        }
      })
  }

   canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no contact or the contact info is unchanged
    if ((!this.contact) || _.isEqual(this.contact, this.contactDetails.value)) {
      return true;
    }
    return window.confirm('Do you want to go back? Your unsaved changes will be lost');
  }
  
}





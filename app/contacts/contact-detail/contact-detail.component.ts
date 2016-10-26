import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../shared/contact-model';
import { ContactService } from '../shared/services/contact.service';



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
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.contactService.getContactDetails(id)
        .subscribe(contact => {
          this.contact = contact
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

  back() {
    this.location.back();
  }

  update(contact: Contact){
    this.contactService.update(contact)
      .subscribe(()=> this.back())
  }

  delete(contact: Contact){
    this.contactService.deleteContact(contact)
      .subscribe(()=> this.back())
  }
  
}





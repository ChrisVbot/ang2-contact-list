import { Component, Input, OnInit,
  trigger,
  state,
  style,
  transition,
  animate
 } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Contact } from '../shared/contact-model';
import { ContactService } from '../shared/services/contact.service';

@Component({
  moduleId: module.id,
  selector: 'add-contact',
  animations: [
    trigger('bringUpMenu', [
      state('active', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform:'translateY(100%)'}),
        animate(300)
        ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)'}))
        ])
    ]),
    trigger('growButton', [
      state('inactive', style({transform: 'scale(1)'})),
      state('active', style({transform: 'scale(1.5)'})),
      transition('active => inactive', animate('300ms ease-in')),
      transition('inactive => active', animate('300ms ease-out'))
    ])
  ],
  templateUrl: 'new-contact.component.html',
  styleUrls: ['new-contact.component.css']
})

export class NewContactComponent implements OnInit {
  @Input() contacts: Contact[];
  errorMessage: string;
  confirmation: boolean;
  newContact;
  show:boolean = false;

  buttonState: string = 'inactive';
  
  newContactForm: FormGroup;

  constructor(private contactService: ContactService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.confirmation = true;
    this.errorMessage = null;
    this.newContactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    }); 

  }

  growButton(): void {
    this.buttonState = 'active';
  }

  shrinkButton(): void{
    this.buttonState = 'inactive';
  }
  

  resetForm(): void {
    this.newContactForm.reset();
    this.confirmation = true;
  }

  confirm(): void {
    this.confirmation = false;
  }

  addNewContact(contact: Contact): void {
    if (!contact) {return;}
    this.contactService.addContact(contact)
      .subscribe(
        contact => {
          this.contacts.push(contact);
          this.resetForm();
        },
        error => this.errorMessage = 'Something went wrong' + error 
      )

  }


}












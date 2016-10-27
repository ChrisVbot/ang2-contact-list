import { Component, OnInit } from '@angular/core';

import { Contact } from '../shared/contact-model';
import { ContactService } from '../shared/services/contact.service';
import { ContactSearchService } from '../shared/services/contact-search.service';


import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styles: [`
    .card { 
      background: #1565c0;
      height: 300px;
      overflow-y: auto;
    }
  `],
  providers: [ContactSearchService]

})

export class HomeComponent implements OnInit {
  contact: Contact;
  loading: boolean;

  constructor(
      private contactService: ContactService,
      private router: Router
    ){}

  ngOnInit(): void {
    this.getNewest();
    this.loading = true;
  }

  getNewest(){
    this.contactService.getNewest()
      .subscribe(contact => {
        this.contact = contact;
        this.loading = false;
      })
  }

  gotoDetails(contact: Contact){
    let link = ['/contacts', contact.id];
    this.router.navigate(link)
  }

}




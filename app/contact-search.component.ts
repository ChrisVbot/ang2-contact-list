import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ContactSearchService } from './contact-search.service';

@Component ({
  selector: 'contact-search',
  template: `
    <div>
      <h2>Search Contacts</h2>
      <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />
      <div>
        <div *ngFor="let contact of contacts | async"
             (click)="selectContact(contact)">
          {{contact.name}}
        </div>
      </div>
    </div>
  `,
  providers: [ ContactSearchService ]
})

export class ContactSearchComponent implements OnInit {
  contacts: Observable<Contact[]>;
  private searchTermStream = new Subject<string>();

  constructor(
    private contactSearchService: ContactSearchService,
    private router: Router){}

  search(term: string): void {
    this.searchTermStream.next(term);
  }

  ngOnInit(): void {
    this.contacts = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.contactSearchService.search(term) : Observable.of<Contact[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Contact[]>([]);
      });
  }

  selectContact(contact: Contact){
    let link = ['/contacts', contact.id];
    this.router.navigate(link)
  }
}















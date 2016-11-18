import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from '../contact-model';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ContactSearchService {
  constructor(private http: Http) {}

  search(term): Observable<Contact[]>{
    return this.http.get(`/api/search/?name=${term}`)
      .map(response => response.json())
  }
}
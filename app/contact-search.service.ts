import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact';

@Injectable()

export class ContactSearchService {
  constructor(private http: Http){}

  search(term: string): Observable<Contact[]>{
    return this.http.get(`app/contactslist/?name=${term}`)
      .map((res: Response) => res.json().data as Contact[]);
  }

}
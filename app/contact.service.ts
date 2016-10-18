import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact';

@Injectable()

export class ContactService{

  private contactsUrl = 'app/contactslist';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http){}

 

  getContacts(): Observable<Contact[]>{
    return this.http.get(this.contactsUrl)
      .map(this.getData)
      .catch(this.handleError)
  }
  getContactDetails(id: number): Observable<Contact>{
    return this.getContacts()
      .map(contacts => contacts.find(contact => contact.id === id))
  }

  getData(res: Response) {
    let body = res.json()
    return body.data || {}
  }

  handleError(error: any){
    console.error('Something went wrong', error);
  }

  addContact(contact): Observable<Contact>{
    let body = JSON.stringify(contact);
    return this.http.post(this.contactsUrl, body, this.options)
      .map(this.getData)
      .catch(this.handleError)
  }

  update(contact): Observable<Contact>{
    let body = JSON.stringify(contact);
    let url = `${this.contactsUrl}/${contact.id}`

    return this.http.put(url, body, this.options)
      .map(()=> contact)
      .catch(this.handleError);
  }

  deleteContact(contact): Observable<Contact>{
    let url = `${this.contactsUrl}/${contact.id}`

    return this.http.delete(url)
      .map(() => null)
      .catch(this.handleError);
  }


}











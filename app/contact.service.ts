import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Contact } from './contact';

import { CONTACTS } from './contacts';

@Injectable()

export class ContactService{

  private contactsUrl = 'app/contactslist';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http){}

 

  getContacts(): Promise<Contact[]>{
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(this.getData)
      .catch(this.handleError)
  }
  getContactDetails(id: number): Promise<Contact>{
    return this.getContacts()
      .then(contacts => contacts.find(contact => contact.id === id))
  }

  getData(res: Response) {
    let body = res.json()
    return body.data || {}
  }

  handleError(error: any){
    console.error('Something went wrong', error);
  }

  addContact(contact): Promise<Contact>{
    let body = JSON.stringify(contact);
    return this.http.post(this.contactsUrl, body, this.options)
      .toPromise()
      .then(this.getData)
      .catch(this.handleError)
  }

  update(contact): Promise<Contact>{
    let body = JSON.stringify(contact);
    let url = `${this.contactsUrl}/${contact.id}`

    return this.http.put(url, body, this.options)
      .toPromise()
      .then(()=> contact)
      .catch(this.handleError);
  }

  deleteContact(contact): Promise<Contact>{
    let url = `${this.contactsUrl}/${contact.id}`

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


}











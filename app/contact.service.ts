import { Injectable } from '@angular/core';

import { CONTACTS } from './contacts';

@Injectable()

export class ContactService{
	getContacts(){
		return CONTACTS;
	}
}
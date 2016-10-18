import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
  createDb(){
    let contactslist = [
      {id: 1, name: "Jane", age: 31, phone: "555-3333"}, 
      {id: 2, name: "Billy", age: 3, phone: "555-4444"}, 
      {id: 3, name: "Sally", age: 19, phone: "555-9999"},
      {id: 4, name: "Jimmy", age: 35, phone: "555-8888"},
      {id: 5, name: "Jessie", age: 52, phone: "555-1234"},
      {id: 6, name: "Ashley", age: 31, phone: "555-3311"}
    ]
    return {contactslist}
  }
}
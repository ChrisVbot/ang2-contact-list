import { Pipe, PipeTransform } from '@angular/core'
import { Contact } from '../contact-model';

@Pipe({
  name: 'filterable'
})

export class NameFilterPipe implements PipeTransform {
  transform(contacts: Contact[], searchTerm: string) {
    if (searchTerm.length === 0) return contacts;
    return contacts.filter(term => term.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
  }
}
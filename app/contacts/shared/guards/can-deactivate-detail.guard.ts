import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ContactDetailComponent } from '../../contact-detail/contact-detail.component';

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<ContactDetailComponent> {

  canDeactivate(component: ContactDetailComponent){
    if (component.hasChanges()) {
      return window.confirm('Do you want to go back? Your unsaved changes will be lost')
    }
    return true;
  }

}
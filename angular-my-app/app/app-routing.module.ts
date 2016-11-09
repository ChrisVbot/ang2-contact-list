import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { HomeComponent } from './contacts/home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './contacts/page-not-found/page-not-found.component';
import { ConfirmDeactivateGuard } from './contacts/shared/guards/can-deactivate-detail.guard';

const routes: Routes = [
  { 
    path: 'contacts/:id', 
    component: ContactDetailComponent,
    canDeactivate: [ConfirmDeactivateGuard]
     },
  { path: 'home', component: HomeComponent },
  { 
    path: 'contacts', 
    component: ContactsComponent,
    canDeactivate: [ConfirmDeactivateGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
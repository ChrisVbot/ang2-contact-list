import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
//Components
import { ContactsComponent } from './contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HomeComponent } from './home/home.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { SpinnerComponent } from './loading-component/loading.component';
//Providers
import { ContactService } from './shared/services/contact.service';
import { ConfirmDeactivateGuard } from './shared/guards/can-deactivate-detail.guard';
//Directives and Pipes
import { SearchBarDirective } from './shared/directives/searchbar.directive';
import { HoverDirective } from './shared/directives/hover.directive';
import { CapitalizerPipe } from './shared/pipes/capitalizer.pipe';
import { AlphabetizerPipe } from './shared/pipes/alphabetizer.pipe';
import { NameFilterPipe } from './shared/pipes/name-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  declarations: [
    ContactsComponent,
    NewContactComponent,
    ContactDetailComponent,
    HomeComponent,
    ContactSearchComponent,
    SearchBarDirective,
    HoverDirective,
    CapitalizerPipe,
    AlphabetizerPipe,
    NameFilterPipe,
    SpinnerComponent
  ]
})

export class ContactsModule {}
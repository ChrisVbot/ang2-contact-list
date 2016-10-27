import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { HomeComponent } from './contacts/home/home.component';
import { ContactSearchComponent } from './contacts/contact-search/contact-search.component';
import { SpinnerComponent } from './contacts/loading-component/loading.component';

import { ContactService } from './contacts/shared/services/contact.service';

import { SearchBarDirective } from './contacts/shared/directives/searchbar.directive';
import { HoverDirective } from './contacts/shared/directives/hover.directive';

import { CapitalizerPipe } from './contacts/shared/pipes/capitalizer.pipe';
import { AlphabetizerPipe } from './contacts/shared/pipes/alphabetizer.pipe';
import { NameFilterPipe } from './contacts/shared/pipes/name-filter.pipe';


@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		RouterModule.forRoot([
			{
				path: 'contacts/:id',
				component: ContactDetailComponent
			},
			{
				path: 'home',
				component: HomeComponent
			},
			{
				path: 'contacts',
				component: ContactsComponent
			},
			{
				path: '',
				redirectTo: '/home',
				pathMatch: 'full'
			}
		])
	],
	providers: [ ContactService ],
	declarations: [ 
		AppComponent,
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
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {

}
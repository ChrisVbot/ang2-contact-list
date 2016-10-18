import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts.component';
import { NewContactComponent } from './new-contact.component';
import { ContactDetailComponent } from './contact-detail.component'
import { HomeComponent } from './home.component';
import { ContactSearchComponent } from './contact-search.component';

import { ContactService } from './contact.service';


@NgModule({
	imports: [ 
		BrowserModule,
		FormsModule,
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
		ContactSearchComponent
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {

}
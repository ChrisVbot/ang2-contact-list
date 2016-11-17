import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { ContactsModule } from './contacts/contacts.module';

import { AppComponent } from './app.component';

import { ConfirmDeactivateGuard } from './contacts/shared/guards/can-deactivate-detail.guard';

//TODO: remove reference to InMemoryWebApi
@NgModule({
	imports: [ 
		BrowserModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
		AppRoutingModule,
		ContactsModule
	],
	providers: [ ConfirmDeactivateGuard ],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule {

}
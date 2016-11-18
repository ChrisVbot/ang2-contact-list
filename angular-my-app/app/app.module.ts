import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { ContactsModule } from './contacts/contacts.module';

import { AppComponent } from './app.component';

import { ConfirmDeactivateGuard } from './contacts/shared/guards/can-deactivate-detail.guard';

@NgModule({
	imports: [ 
		BrowserModule,
		HttpModule,
		AppRoutingModule,
		ContactsModule
	],
	providers: [ ConfirmDeactivateGuard ],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule {

}
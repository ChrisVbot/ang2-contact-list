"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var in_memory_web_api_module_1 = require('angular-in-memory-web-api/in-memory-web-api.module');
var in_memory_data_service_1 = require('./in-memory-data.service');
var app_component_1 = require('./app.component');
var contacts_component_1 = require('./contacts.component');
var new_contact_component_1 = require('./new-contact.component');
var contact_detail_component_1 = require('./contact-detail.component');
var home_component_1 = require('./home.component');
var contact_search_component_1 = require('./contact-search.component');
var contact_service_1 = require('./contact.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                in_memory_web_api_module_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                router_1.RouterModule.forRoot([
                    {
                        path: 'contacts/:id',
                        component: contact_detail_component_1.ContactDetailComponent
                    },
                    {
                        path: 'home',
                        component: home_component_1.HomeComponent
                    },
                    {
                        path: 'contacts',
                        component: contacts_component_1.ContactsComponent
                    },
                    {
                        path: '',
                        redirectTo: '/home',
                        pathMatch: 'full'
                    }
                ])
            ],
            providers: [contact_service_1.ContactService],
            declarations: [
                app_component_1.AppComponent,
                contacts_component_1.ContactsComponent,
                new_contact_component_1.NewContactComponent,
                contact_detail_component_1.ContactDetailComponent,
                home_component_1.HomeComponent,
                contact_search_component_1.ContactSearchComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
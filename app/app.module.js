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
var http_1 = require('@angular/http');
var in_memory_web_api_module_1 = require('angular-in-memory-web-api/in-memory-web-api.module');
var in_memory_data_service_1 = require('./in-memory-data.service');
var app_component_1 = require('./app.component');
var contacts_component_1 = require('./contacts/contacts.component');
var new_contact_component_1 = require('./contacts/new-contact/new-contact.component');
var contact_detail_component_1 = require('./contacts/contact-detail/contact-detail.component');
var home_component_1 = require('./contacts/home/home.component');
var contact_search_component_1 = require('./contacts/contact-search/contact-search.component');
var loading_component_1 = require('./contacts/loading-component/loading.component');
var contact_service_1 = require('./contacts/shared/services/contact.service');
var searchbar_directive_1 = require('./contacts/shared/directives/searchbar.directive');
var hover_directive_1 = require('./contacts/shared/directives/hover.directive');
var capitalizer_pipe_1 = require('./contacts/shared/pipes/capitalizer.pipe');
var alphabetizer_pipe_1 = require('./contacts/shared/pipes/alphabetizer.pipe');
var name_filter_pipe_1 = require('./contacts/shared/pipes/name-filter.pipe');
var app_routing_module_1 = require('./app-routing.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                in_memory_web_api_module_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule
            ],
            providers: [contact_service_1.ContactService],
            declarations: [
                app_component_1.AppComponent,
                contacts_component_1.ContactsComponent,
                new_contact_component_1.NewContactComponent,
                contact_detail_component_1.ContactDetailComponent,
                home_component_1.HomeComponent,
                contact_search_component_1.ContactSearchComponent,
                searchbar_directive_1.SearchBarDirective,
                hover_directive_1.HoverDirective,
                capitalizer_pipe_1.CapitalizerPipe,
                alphabetizer_pipe_1.AlphabetizerPipe,
                name_filter_pipe_1.NameFilterPipe,
                loading_component_1.SpinnerComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
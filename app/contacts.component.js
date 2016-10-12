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
var contact_service_1 = require('./contact.service');
var ContactsComponent = (function () {
    function ContactsComponent(contactService) {
        this.contactService = contactService;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactsComponent.prototype.getContacts = function () {
        this.contacts = this.contactService.getContacts();
    };
    ContactsComponent.prototype.selectContact = function (contact) {
        this.selectedContact = contact;
    };
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts',
            template: "\n\t\t<h2>Contact List</h2>\n\t\t<ul class=\"contacts\">\n\t\t\t<li *ngFor=\"let contact of contacts\" (click)=\"selectContact(contact)\" >\n\t\t\t\tName: {{contact.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<contact-detail [contact]=\"selectedContact\"></contact-detail>\n\t"
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map
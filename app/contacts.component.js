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
var router_1 = require('@angular/router');
var contact_service_1 = require('./contact.service');
var ContactsComponent = (function () {
    function ContactsComponent(contactService, router) {
        this.contactService = contactService;
        this.router = router;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactsComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getContacts()
            .subscribe(function (contacts) { return _this.contacts = contacts; });
    };
    ContactsComponent.prototype.selectContact = function (contact) {
        var link = ['/contacts', contact.id];
        this.router.navigate(link);
    };
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts',
            template: "\n\t\t<h2>Contact List</h2>\n\t\t\t<div class=\"container\">\n\t    \t<div class=\"row\">\n      \t\t<div class=\"col s4 m4\" *ngFor=\"let contact of contacts\" (click)=\"selectContact(contact)\">\n        \t\t<div class=\"card-panel #1976d2 blue darken-2 list\">\n          \t\t<span class=\"white-text\">{{contact?.name}}</span>\n        \t\t</div>\n      \t\t</div>\n    \t</div>\n\t\t</div>\n\t\t<add-contact [contacts]=\"contacts\"></add-contact>\n\t\t<contact-search></contact-search>\n\t",
            styles: ["\n\t\t.list {\n\t\t\tcursor: pointer;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof contact_service_1.ContactService !== 'undefined' && contact_service_1.ContactService) === 'function' && _a) || Object, router_1.Router])
    ], ContactsComponent);
    return ContactsComponent;
    var _a;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map
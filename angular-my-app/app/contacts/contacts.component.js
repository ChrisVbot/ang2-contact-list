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
var contact_service_1 = require('./shared/services/contact.service');
var new_contact_component_1 = require('./new-contact/new-contact.component');
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
            .subscribe(function (contacts) { return _this.contacts = contacts; }, function (error) { return console.log(error); });
    };
    ContactsComponent.prototype.selectContact = function (contact) {
        var link = ['/contacts', contact.id];
        this.router.navigate(link);
    };
    ContactsComponent.prototype.canDeactivate = function () {
        if (this.newContactComponent.canDeactivate()) {
            return true;
        }
        else {
            return window.confirm('Are you sure? Your unsaved changes will be lost');
        }
    };
    __decorate([
        core_1.ViewChild(new_contact_component_1.NewContactComponent), 
        __metadata('design:type', new_contact_component_1.NewContactComponent)
    ], ContactsComponent.prototype, "newContactComponent", void 0);
    ContactsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contacts',
            templateUrl: 'contacts.component.html',
            styleUrls: ['contacts.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map
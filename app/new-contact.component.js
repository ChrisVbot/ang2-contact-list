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
//form to add new contacts
var core_1 = require('@angular/core');
var contact_service_1 = require('./contact.service');
var NewContactComponent = (function () {
    function NewContactComponent(contactService) {
        this.contactService = contactService;
        this.errorMessage = null;
        this.newContact = { name: '', age: '', phone: '' };
        this.confirmation = true;
    }
    NewContactComponent.prototype.clear = function () {
        this.newContact = { name: '', age: '', phone: '' };
    };
    NewContactComponent.prototype.confirm = function () {
        this.confirmation = false;
    };
    NewContactComponent.prototype.addNewContact = function (contact) {
        var _this = this;
        if (!contact) {
            return;
        }
        this.contactService.addContact(contact)
            .subscribe(function (contact) { return _this.contacts.push(contact); }, function (error) { return _this.errorMessage = 'Something went wrong' + error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NewContactComponent.prototype, "contacts", void 0);
    NewContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-contact',
            templateUrl: 'new-contact.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof contact_service_1.ContactService !== 'undefined' && contact_service_1.ContactService) === 'function' && _a) || Object])
    ], NewContactComponent);
    return NewContactComponent;
    var _a;
}());
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=new-contact.component.js.map
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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var contact_service_1 = require('../shared/services/contact.service');
var ContactDetailComponent = (function () {
    function ContactDetailComponent(contactService, route, location, formBuilder) {
        this.contactService = contactService;
        this.route = route;
        this.location = location;
        this.formBuilder = formBuilder;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.contactService.getContactDetails(id)
                .subscribe(function (contact) { return _this.contact = contact; });
        });
        this.populateDetails();
    };
    ContactDetailComponent.prototype.populateDetails = function () {
        this.contactDetails = this.formBuilder.group({
            id: [this.contact.id],
            name: [this.contact.name, [forms_1.Validators.required]],
            age: [this.contact.age, [forms_1.Validators.required]],
            phone: [this.contact.phone, [forms_1.Validators.required]]
        });
    };
    ContactDetailComponent.prototype.back = function () {
        this.location.back();
    };
    ContactDetailComponent.prototype.update = function (contact) {
        var _this = this;
        this.contactService.update(contact)
            .subscribe(function () { return _this.back(); });
    };
    ContactDetailComponent.prototype.delete = function (contact) {
        var _this = this;
        this.contactService.deleteContact(contact)
            .subscribe(function () { return _this.back(); });
    };
    ContactDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact-detail',
            templateUrl: 'contact-detail.component.html',
            styles: ["\n    .required-field {\n      background: #ffcdd2;\n      color: #632827;\n      padding: 15px;\n      margin: -20px auto 20px auto;\n      border-radius: 4px;\n      width: 100%;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.ActivatedRoute, common_1.Location, forms_1.FormBuilder])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contact-detail.component.js.map
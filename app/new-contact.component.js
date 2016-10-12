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
var NewContactComponent = (function () {
    function NewContactComponent() {
        this.newContact = { name: '', age: '', phone: '' };
        this.confirmation = true;
    }
    NewContactComponent.prototype.clear = function () {
        this.newContact = { name: '', age: '', phone: '' };
    };
    NewContactComponent.prototype.confirm = function () {
        this.confirmation = false;
    };
    NewContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-contact',
            templateUrl: 'new-contact.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NewContactComponent);
    return NewContactComponent;
}());
exports.NewContactComponent = NewContactComponent;
//# sourceMappingURL=new-contact.component.js.map
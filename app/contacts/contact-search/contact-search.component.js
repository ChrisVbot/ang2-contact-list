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
var contact_search_service_1 = require('../shared/services/contact-search.service');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var ContactSearchComponent = (function () {
    function ContactSearchComponent(contactSearchService, router) {
        this.contactSearchService = contactSearchService;
        this.router = router;
        this.searchTermStream = new Subject_1.Subject();
    }
    ContactSearchComponent.prototype.search = function (term) {
        this.searchTermStream.next(term);
    };
    ContactSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contacts = this.searchTermStream
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.contactSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    ContactSearchComponent.prototype.selectContact = function (contact) {
        var link = ['/contacts', contact.id];
        this.router.navigate(link);
    };
    ContactSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'contact-search',
            templateUrl: 'contact-search.component.html',
            styleUrls: ['contact-search.component.css']
        }), 
        __metadata('design:paramtypes', [contact_search_service_1.ContactSearchService, router_1.Router])
    ], ContactSearchComponent);
    return ContactSearchComponent;
}());
exports.ContactSearchComponent = ContactSearchComponent;
//# sourceMappingURL=contact-search.component.js.map
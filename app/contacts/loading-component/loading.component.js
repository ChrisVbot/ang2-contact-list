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
var SpinnerComponent = (function () {
    function SpinnerComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SpinnerComponent.prototype, "loading", void 0);
    SpinnerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'loading-spinner',
            template: "\n    <div [ngSwitch]=\"loading\">\n      <div *ngSwitchCase=\"false\">\n        <ng-content></ng-content>\n      </div>\n      <div *ngSwitchCase=\"true\">\n        <div class=\"sk-folding-cube\">\n          <div class=\"sk-cube1 sk-cube\"></div>\n          <div class=\"sk-cube2 sk-cube\"></div>\n          <div class=\"sk-cube4 sk-cube\"></div>\n          <div class=\"sk-cube3 sk-cube\"></div>\n        </div>\n      </div>\n    </div>\n  ",
            styleUrls: ["loading-component.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=loading.component.js.map
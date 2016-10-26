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
var HoverDirective = (function () {
    function HoverDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    HoverDirective.prototype.hoverChange = function (newColor) {
        this.renderer.setElementStyle(this.el.nativeElement, 'background', newColor);
    };
    HoverDirective.prototype.onHover = function () {
        var newColor = this.colorRandomizer();
        this.hoverChange(newColor);
    };
    HoverDirective.prototype.offHover = function () {
        this.hoverChange(null);
    };
    HoverDirective.prototype.colorRandomizer = function () {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i += 1) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    HoverDirective = __decorate([
        core_1.Directive({
            selector: "[myHover]",
            host: {
                '(mouseenter)': 'onHover()',
                '(mouseleave)': 'offHover()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], HoverDirective);
    return HoverDirective;
}());
exports.HoverDirective = HoverDirective;
//# sourceMappingURL=hover.directive.js.map
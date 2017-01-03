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
var core_1 = require("@angular/core");
var ColorBox = (function () {
    function ColorBox(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ColorBox.prototype.onClick = function () {
        var size = this.el.nativeElement.value.length;
        if (size > 20) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', "'red'");
        }
        else if (size > 15) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', "'violet'");
        }
        else if (size > 10) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', "'orange'");
        }
        else if (size > 5) {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', "'yellow'");
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement, 'background-color', "'green'");
        }
    };
    return ColorBox;
}());
__decorate([
    core_1.Input('colorbox'),
    __metadata("design:type", String)
], ColorBox.prototype, "color", void 0);
__decorate([
    core_1.HostListener('keyup'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ColorBox.prototype, "onClick", null);
ColorBox = __decorate([
    core_1.Directive({
        selector: '[colorbox]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], ColorBox);
exports.ColorBox = ColorBox;
//# sourceMappingURL=colorbox.directive.js.map
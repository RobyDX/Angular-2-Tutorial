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
var Persona = (function () {
    function Persona() {
        this.nome = "";
        this.cognome = "";
    }
    return Persona;
}());
exports.Persona = Persona;
var AppComponent = (function () {
    function AppComponent(ref, element) {
        this.ref = ref;
        this.element = element;
        this.message = "";
    }
    AppComponent.prototype.ShowMessage = function () {
        this.ref.detectChanges();
        $("#myModal").modal("show");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "AppComponent.html",
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.ElementRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
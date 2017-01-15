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
var Person_1 = require("./Person");
var AppComponent = (function () {
    function AppComponent() {
        this.items = [];
    }
    AppComponent.prototype.Add = function (name, surname) {
        if (name.validity.valid && surname.validity.valid) {
            this.items.push(new Person_1.Person(name.value, surname.value));
            name.value = "";
            surname.value = "";
        }
        else {
            alert("Populate fields");
        }
    };
    AppComponent.prototype.Delete = function (person) {
        var i = this.items.findIndex(function (p) { return p === person; });
        this.items.splice(i, 1);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "AppComponent.html"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
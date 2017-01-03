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
var app_service_1 = require("./app.service");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = "Titolo";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "<router-outlet></router-outlet>",
        providers: [app_service_1.AppService]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
var AppComponentA = (function () {
    function AppComponentA(service, route) {
        this.service = service;
        this.route = route;
        this.title = "Titolo";
    }
    return AppComponentA;
}());
AppComponentA = __decorate([
    core_1.Component({
        selector: "componentA",
        templateUrl: "appcomponent.html",
        providers: [app_service_1.AppService]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService, router_1.ActivatedRoute])
], AppComponentA);
exports.AppComponentA = AppComponentA;
var AppComponentB = (function () {
    function AppComponentB(service, route) {
        this.service = service;
        this.route = route;
        this.title = "";
    }
    AppComponentB.prototype.ngOnInit = function () {
        var key = "id";
        var id = this.route.snapshot.params[key];
        this.title = this.service.GetUtentByID(id).nome;
    };
    return AppComponentB;
}());
AppComponentB = __decorate([
    core_1.Component({
        selector: "componentB",
        template: "<h1>Ciao {{title}}</h1><p><a [routerLink]=\"['']\">Torna</a></p>",
        providers: [app_service_1.AppService]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService, router_1.ActivatedRoute])
], AppComponentB);
exports.AppComponentB = AppComponentB;
//# sourceMappingURL=app.component.js.map
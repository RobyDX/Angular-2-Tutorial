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
var http_1 = require("@angular/http");
var User = (function () {
    function User(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    return User;
}());
exports.User = User;
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.users = [];
        this.users.push(new User("John", "Doe"));
        this.users.push(new User("Richard", "Miles"));
        this.users.push(new User("Mary", "Major"));
        this.users.push(new User("Jane", "Roe"));
    }
    AppService.prototype.GetUserByID = function (id) {
        return this.users[id];
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
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
var Persona_1 = require("./Persona");
var TableRowComponent = (function () {
    function TableRowComponent() {
        this.delete = new core_1.EventEmitter();
    }
    TableRowComponent.prototype.Elimina = function () {
        this.delete.emit(this.datarow);
    };
    return TableRowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Persona_1.Persona)
], TableRowComponent.prototype, "datarow", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TableRowComponent.prototype, "delete", void 0);
TableRowComponent = __decorate([
    core_1.Component({
        selector: "tablerow",
        templateUrl: "tablerow.component.html",
    }),
    __metadata("design:paramtypes", [])
], TableRowComponent);
exports.TableRowComponent = TableRowComponent;
//# sourceMappingURL=tablerow.component.js.map
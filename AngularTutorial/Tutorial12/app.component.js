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
var forms_1 = require("@angular/forms");
["use strict"];
function validateCities(citynames) {
    return function (c) {
        for (var _i = 0, citynames_1 = citynames; _i < citynames_1.length; _i++) {
            var i = citynames_1[_i];
            if (c.value.toLowerCase() == i)
                return null;
        }
        return {
            validateCities: {
                valid: false
            }
        };
    };
}
var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.emailRegex = "[a-zA-Z0-9]+@[a-zA-Z0-9]+";
        this.civicoRegex = "[0-9]*";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.myform = this.fb.group({
            "nome": ["", forms_1.Validators.required],
            "cognome": ["", forms_1.Validators.required],
            "email": ["", [forms_1.Validators.required, forms_1.Validators.pattern(this.emailRegex)]],
            "indirizzo": this.fb.group({
                "via": ['', forms_1.Validators.required],
                "civico": ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.civicoRegex)]],
                "citta": ['', [forms_1.Validators.required, validateCities(["roma", "milano", "napoli"])]]
            })
        });
    };
    AppComponent.prototype.salva = function () {
        alert(this.myform.value.email);
        alert(this.myform.value.indirizzo.via);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "AppComponent.html"
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
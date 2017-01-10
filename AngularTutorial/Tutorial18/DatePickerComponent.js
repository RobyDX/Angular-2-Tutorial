"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
exports.DATE_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function (_super) {
    __extends(DatePickerComponent, _super);
    function DatePickerComponent() {
        var _this = _super.apply(this, arguments) || this;
        _this.onTouchedCallback = function () { };
        _this.onChangeCallback = function () { };
        return _this;
    }
    DatePickerComponent.prototype.onChange = function (val) {
        this._current = val;
    };
    DatePickerComponent.prototype.onBlur = function () {
        var n = new Date(this._current).valueOf();
        if (!isNaN(n)) {
            this._value = n;
            this.onChangeCallback(n);
        }
    };
    DatePickerComponent.prototype.ngOnInit = function () {
        var t = this;
        var input = this.el.nativeElement;
        $(input).datepicker({
            onSelect: function (date) {
                t._current = date;
                t.onBlur();
            }
        });
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return DatePickerComponent;
}(core_1.OnInit));
__decorate([
    core_1.ViewChild("dinput"),
    __metadata("design:type", core_1.ElementRef)
], DatePickerComponent.prototype, "el", void 0);
DatePickerComponent = __decorate([
    core_1.Component({
        selector: "picker",
        template: "<input #dinput [ngModel]=\"_value|date:'dd/MM/yyyy'\" (ngModelChange)='onChange($event)' (blur)='onBlur()' />",
        providers: [exports.DATE_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [])
], DatePickerComponent);
exports.DatePickerComponent = DatePickerComponent;
//# sourceMappingURL=DatePickerComponent.js.map
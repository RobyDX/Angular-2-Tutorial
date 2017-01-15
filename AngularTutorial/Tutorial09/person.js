"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
var Person = (function () {
    function Person(name, surname, gender) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
    }
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map
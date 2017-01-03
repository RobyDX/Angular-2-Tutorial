"use strict";
var Sesso;
(function (Sesso) {
    Sesso[Sesso["Maschio"] = 1] = "Maschio";
    Sesso[Sesso["Femmina"] = 2] = "Femmina";
})(Sesso = exports.Sesso || (exports.Sesso = {}));
var Persona = (function () {
    function Persona(nome, cognome, sesso) {
        this.nome = nome;
        this.cognome = cognome;
        this.sesso = sesso;
    }
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map
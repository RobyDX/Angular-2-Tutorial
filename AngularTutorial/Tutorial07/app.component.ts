import { Component } from "@angular/core";
export class Persona {
    nome: string = "";
    cognome: string = "";
}

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent {
    text: string = "";
}
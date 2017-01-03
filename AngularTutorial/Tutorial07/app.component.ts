import { Component } from "@angular/core";
import {ColorBox} from "./colorbox.directive"
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
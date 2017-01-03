import { Component } from "@angular/core";
import {Persona, Sesso } from "./persona"
import {UserPipe} from "./userpipe"


@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent {
    user: Persona = new Persona("Roberto", "Nacchia", Sesso.Maschio);


}
import { Component } from "@angular/core";
import {Persona} from "./Persona"

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent {
    items: Persona[] = [];

    Aggiungi(nome: HTMLInputElement, cognome: HTMLInputElement): void {

        if (nome.validity.valid && cognome.validity.valid) {
            this.items.push(new Persona(nome.value, cognome.value));
            nome.value = "";
            cognome.value = "";

        } else {
            alert("Popolare i campi nome e cognome");
        }
    }

    Elimina(persona: Persona): void {
        var i= this.items.findIndex(p => { return p === persona});
        this.items.splice(i, 1);        
    }
}
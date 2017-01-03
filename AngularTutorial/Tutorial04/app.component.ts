import { Component } from "@angular/core";

export class Persona {
    nome: string = "";
    cognome: string = "";

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
    }
}

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

    Elimina(index: number): void {
        this.items.splice(index, 1);
    }
}
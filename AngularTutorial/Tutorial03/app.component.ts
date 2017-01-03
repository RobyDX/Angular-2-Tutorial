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
    current: Persona = new Persona();
    items: Persona[] = [];

    Aggiungi(): void {
        if (this.current.nome.length > 0 && this.current.cognome.length > 0) {
            this.items.push(this.current);
            this.current = new Persona();
        } else {
            alert("Popolare i campi nome e cognome");
        }
    }
}
import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: "<h1 (click)='AggiornaData()' >{{text}}</h1>"
})
export class AppComponent {
    
    text: string = "Clicca per aggiornare";

    AggiornaData(): void
    {
        this.text = "(Clicca per aggiornare)Sono le " + new Date().toLocaleTimeString("it-IT");
    }
}
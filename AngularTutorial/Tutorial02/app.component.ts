import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template:
    "<p><input [(ngModel)]='text' placeholder='Inserisci un testo'/></p>" +
    "<p>Testo: {{text}}</p>" +
    "<p>Lunghezza: {{GetLength()}}</p>" +
    "<p><button (click)='ClearData()'>Clear</button></p>"
})
export class AppComponent {

    text: string = "";
    GetLength(): number
    {
        return this.text.length;
    }

    ClearData(): void {
        this.text = "";
    }
}
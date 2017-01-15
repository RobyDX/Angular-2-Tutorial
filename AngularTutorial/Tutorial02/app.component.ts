import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template:
    "<p><input [(ngModel)]='text' placeholder='Insert Text'/></p>" +
    "<p>Text: {{text}}</p>" +
    "<p>Length: {{GetLength()}}</p>" +
    "<p><button (click)='ClearData()'>Clear</button></p>"
})
export class AppComponent {

    text: string = "";
    GetLength(): number {
        return this.text.length;
    }

    ClearData(): void {
        this.text = "";
    }
}
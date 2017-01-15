import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: "<h1>{{text}}</h1><button (click)='RefreshData()'>Update</button>"
})
export class AppComponent {

    text: string = "Click To Update";

    RefreshData(): void {
        this.text = new Date().toLocaleTimeString("it-IT");
    }
}
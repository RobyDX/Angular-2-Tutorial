﻿import { Component } from "@angular/core";

export class Persona {
    nome: string = "";
    cognome: string = "";
}

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent {
    panelId: number = 1;
    options: any[] = [{ value: 1, text: "NgClass" }, { value: 2, text: "NgStyle" }];
    checked: boolean = false;
    size: number = 14;


}
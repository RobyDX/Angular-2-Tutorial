import { Component, ElementRef, ChangeDetectorRef } from "@angular/core";
declare var $: any;
export class Persona {
    nome: string = "";
    cognome: string = "";
}

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html",
})
export class AppComponent {
    message: string = "";
    constructor(private ref: ChangeDetectorRef, private element: ElementRef) {

    }

    ShowMessage(): void {
        this.ref.detectChanges();
        $("#myModal").modal("show");
    }
}
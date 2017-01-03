import { Component } from "@angular/core";


@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent {
    dataNascita: Date = new Date(1980, 1 / 17);
    money: number = 0;
    numero: number = 0;
    opzioni: { [k: string]: string } = { '=0': 'Nessuna Mela', '=1': 'Una mela', 'other': '# mele' };
}
import { Component } from "@angular/core";
import { AppService } from "./app.service";
import { Response } from "@angular/http";

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html",
    providers: [AppService]
})
export class AppComponent {
    countries: Array<any> = [];

    constructor(private service: AppService) {

    }

    Refresh(): void {
        this.service.Refresh().subscribe((i: Response) => {
            this.countries = i.json();
        });
    }
}
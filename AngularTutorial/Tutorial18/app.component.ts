import { Component } from "@angular/core";


@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent {
    currentDate: number = 0;

    ResetDate(): void
    {
        this.currentDate = 0;
    }
}


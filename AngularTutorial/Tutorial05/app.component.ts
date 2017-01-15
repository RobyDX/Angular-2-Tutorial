import { Component } from "@angular/core";
import { Person } from "./Person"

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent {
    items: Person[] = [];

    Add(name: HTMLInputElement, surname: HTMLInputElement): void {

        if (name.validity.valid && surname.validity.valid) {
            this.items.push(new Person(name.value, surname.value));
            name.value = "";
            surname.value = "";

        } else {
            alert("Populate fields");
        }
    }

    Delete(person: Person): void {
        var i = this.items.findIndex(p => { return p === person });
        this.items.splice(i, 1);
    }
}
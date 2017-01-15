import { Component } from "@angular/core";

export class Person {
    name: string = "";
    surname: string = "";

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}

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

    Delete(index: number): void {
        this.items.splice(index, 1);
    }
}
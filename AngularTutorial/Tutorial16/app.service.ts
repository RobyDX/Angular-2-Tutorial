import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

export class User {
    name: string;
    surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}

@Injectable()
export class AppService {

    users: User[] = [];

    constructor(private http: Http) {
        this.users.push(new User("John", "Doe"));
        this.users.push(new User("Richard", "Miles"));
        this.users.push(new User("Mary", "Major"));
        this.users.push(new User("Jane", "Roe"));
    }

    GetUserByID(id: number): User {
        return this.users[id];
    }
}
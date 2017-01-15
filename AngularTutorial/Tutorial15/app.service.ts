import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {

    constructor(private http: Http) {

    }

    Refresh(): Observable<Response> {
        return this.http.get("https://restcountries.eu/rest/v1/all");
    }
}
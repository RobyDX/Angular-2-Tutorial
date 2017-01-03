import { Component, OnInit } from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { AppService } from './app.service';
import { Http, Response } from '@angular/http';

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html",
    providers: [AppService]
})
export class AppComponent implements OnInit {
    countries: Array<any> = [];

    constructor(private service: AppService) {

    }

    ngOnInit() {

    }


    aggiorna(): void {
        this.service.Aggiorna().subscribe(i => { this.countries = i.json().RestResponse.result; });
    }
}
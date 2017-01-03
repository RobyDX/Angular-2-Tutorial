import { Component, OnInit } from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { AppService } from './app.service';
import {Http} from '@angular/http'

@Component({
    selector: "my-app2",
    templateUrl: "AppComponent2.html",
})
export class AppComponent2 implements OnInit {

    myform: FormGroup;
    items: Array<any> = [];

    constructor(private fb: FormBuilder, private service: AppService) {
        
    }

    ngOnInit() {
        this.items = this.service.modelsaved;
    }
}
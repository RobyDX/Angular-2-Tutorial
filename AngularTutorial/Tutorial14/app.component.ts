import { Component, OnInit } from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { AppService } from './app.service';

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent implements OnInit {
    myform: FormGroup;

    constructor(private fb: FormBuilder, private service: AppService) {

    }

    ngOnInit() {
        this.myform = this.fb.group(
            {
                "nome": ["", Validators.required],
                "cognome": ["", Validators.required],
            });
    }


    salva(): void {
        this.service.Salva(this.myform.value);
    }
}
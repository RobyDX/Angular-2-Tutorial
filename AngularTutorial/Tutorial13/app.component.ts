import { Component, OnInit } from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { AppService } from './app.service';

@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html",
    providers: [AppService]
})
export class AppComponent implements OnInit {
    emailRegex = "[a-zA-Z0-9]+@[a-zA-Z0-9]+";

    civicoRegex = "[0-9]*";
    myform: FormGroup;

    constructor(private fb: FormBuilder, private service: AppService) {

    }

    ngOnInit() {
        this.myform = this.fb.group(
            {
                "nome": ["", Validators.required],
                "cognome": ["", Validators.required],
                "email": ["", [Validators.required, Validators.pattern(this.emailRegex)]],
                "indirizzo": this.fb.group({
                    "via": ['', <any>Validators.required],
                    "civico": ['', [<any>Validators.required, <any>Validators.pattern(this.civicoRegex)]],
                })
            });
    }


    salva(): void {
        this.service.Salva(this.myform.value);
    }
}
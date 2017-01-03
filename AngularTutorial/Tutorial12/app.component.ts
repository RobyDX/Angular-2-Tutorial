import { Component, OnInit } from "@angular/core";
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
["use strict"]
function validateCities(citynames: string[]) {
    return (c: FormControl) => {

        for (let i of citynames)
        {
            if ((c.value as string).toLowerCase() == i)
                return null;
        }
        
        return {
            validateCities: {
                valid: false
            }
        };
    };
}




@Component({
    selector: "my-app",
    templateUrl: "AppComponent.html"
})
export class AppComponent implements OnInit {
    emailRegex = "[a-zA-Z0-9]+@[a-zA-Z0-9]+";

    civicoRegex = "[0-9]*";
    myform: FormGroup;

    constructor(private fb: FormBuilder) {

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
                    "citta": ['', [Validators.required, validateCities(["roma", "milano", "napoli"])]]
                })
            });
    }


    salva(): void {
        alert(this.myform.value.email);
        alert(this.myform.value.indirizzo.via);
    }
}
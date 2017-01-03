import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "my-app",
    template: "<router-outlet></router-outlet>",
    providers: [AppService]
})
export class AppComponent {
    title: String = "Titolo";
    constructor(private service: AppService) {

    }
}



@Component({
    selector: "componentA",
    templateUrl: "appcomponent.html",
    providers: [AppService]
})
export class AppComponentA {
    title: String = "Titolo";
    constructor(private service: AppService, private route: ActivatedRoute) {

    }
}


@Component({
    selector: "componentB",
    template: "<h1>Ciao {{title}}</h1><p><a [routerLink]=\"['']\">Torna</a></p>",
    providers: [AppService]
})
export class AppComponentB implements OnInit {
    title: String = "";
    constructor(private service: AppService, private route: ActivatedRoute) {

    }

    ngOnInit(): any {

        var key: string = "id";
        var id: number = this.route.snapshot.params[key] as number;
        this.title = this.service.GetUtentByID(id).nome;
    }
}
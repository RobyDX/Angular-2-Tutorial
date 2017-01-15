import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "my-app",
    template: "<router-outlet></router-outlet>",
    providers: [AppService]
})
export class AppComponent {
    title: String = "Title";
    constructor(private service: AppService) {

    }
}



@Component({
    selector: "componentA",
    templateUrl: "appcomponent.html",
    providers: [AppService]
})
export class AppComponentA {
    title: String = "Title";
    constructor(private service: AppService, private route: ActivatedRoute) {

    }
}


@Component({
    selector: "componentB",
    template: "<h1>Hi {{title}}</h1><p><a [routerLink]=\"['']\">Back</a></p>",
    providers: [AppService]
})
export class AppComponentB implements OnInit {
    title: String = "";
    constructor(private service: AppService, private route: ActivatedRoute) {

    }

    ngOnInit(): any {

        var key: string = "id";
        var id: number = this.route.snapshot.params[key] as number;
        this.title = this.service.GetUserByID(id).name;
    }
}
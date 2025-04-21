import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent {

    constructor(private router:Router) {

    }

    map(lang?:string){
        this.router.navigate(["mapa"]);
    }


    bienal(lang?:string) {
        this.router.navigate(["inicio"]);
    }
    

    migracionDarien(lang?:string) {
        this.router.navigate(["ong"]);
    }
    

 
}
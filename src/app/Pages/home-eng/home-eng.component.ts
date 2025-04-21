import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-eng',
  imports: [],
  templateUrl: './home-eng.component.html',
  styleUrl: './home-eng.component.css'
})
export class HomeEngComponent {
 constructor(private router:Router) {

    }

    map(lang?:string){
        this.router.navigate(["mapa"]);
    }


    bienal(lang?:string) {
        this.router.navigate(["inicio_eng"]);
    }
    

    migracionDarien(lang?:string) {
        this.router.navigate(["ong"]);
    }

    home_esp(lang?:string) {
        this.router.navigate(["/"]);
    }
}

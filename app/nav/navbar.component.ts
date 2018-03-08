import { Component } from "@angular/core";
import { AuthService } from "../users/auth.service";

@Component(
    {
        selector: 'nav-bar',
        templateUrl: 'app/nav/navbar.component.html',
        styles: [`
            .nav.navbar-nav {font-size: 15px;}
            #searchForm {margin-right: 100px;}
            li> a.active {color: orange;}
        `]
    }
)
export class  NavBarComponent {
    constructor(private auth: AuthService) {
        
    }

}
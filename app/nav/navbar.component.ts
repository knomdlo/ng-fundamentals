import { Component } from "@angular/core";
import { AuthService } from "../users/auth.service";
import { EventService } from "../events/index";

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
export class NavBarComponent {
    foundSessions: any;
    
    constructor( private auth: AuthService, private eventService: EventService) {
    }

    searchSessions(searchTerm) {
        /* this.eventService.searchSessions(searchTerm)
        .subscribe(sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        }) */
        this.foundSessions = this.eventService.searchSessions(searchTerm);
        console.log(this.foundSessions);
    }

}
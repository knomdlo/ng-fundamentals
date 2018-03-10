import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent} from './events-app.component'
import { NavBarComponent } from "./nav/navbar.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";

import {EventsListComponent, EventThumbnailComponent, EventService, 
        EventDetailsComponent, CreateEventComponent, EventRouterActivator,
        EventListResolver, 
        CreateSessionComponent,
        SessionListComponent} from './events/index'
import { AuthService } from "./users/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CollapsibleComponent } from "./common/collapsible-well.component";

@NgModule ({
    imports: [BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)],
    declarations:
     [EventsAppComponent, EventsListComponent, EventThumbnailComponent,
      NavBarComponent, EventDetailsComponent, CreateEventComponent, 
     Error404Component, CreateSessionComponent, SessionListComponent,
     CollapsibleComponent],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService, EventRouterActivator,
        EventListResolver,
        AuthService,
        {provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState}
        ]
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty) {
        return window.confirm('Save pending. Sure u wanna move?')
    }
    return true;
}
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
import { DurationPipe } from "./events/shared/shared.pipe";
import { TOASTR_TOKEN, CollapsibleComponent, JQ_TOKEN } from "./common/index";
import { SimpleModalComponent } from "./common/simple-modal.component";

declare let toastr: any
declare let jQuery: Object

@NgModule ({
    imports: [BrowserModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)],
    declarations:
     [EventsAppComponent, EventsListComponent, EventThumbnailComponent,
      NavBarComponent, EventDetailsComponent, CreateEventComponent, 
     Error404Component, CreateSessionComponent, SessionListComponent,
     CollapsibleComponent, SimpleModalComponent,
     DurationPipe],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService, EventRouterActivator,
        EventListResolver,
        AuthService,
        {provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState},
        {provide: TOASTR_TOKEN, useValue: toastr},
        {provide: JQ_TOKEN, useValue: jQuery}
        ]
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty) {
        return window.confirm('Save pending. Sure u wanna move?')
    }
    return true;
}
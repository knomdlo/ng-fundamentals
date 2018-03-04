import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent} from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/events-thumbnail.component'
import { EventService } from "./events/shared/event.service";
import { NavBarComponent } from "./nav/navbar.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouterActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/events-list-resolver.service";

@NgModule ({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes)],
    declarations:
     [EventsAppComponent, EventsListComponent, EventThumbnailComponent,
     NavBarComponent, EventDetailsComponent, CreateEventComponent, Error404Component],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService, EventRouterActivator,
        EventListResolver,
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
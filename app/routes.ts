import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouterActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

export const appRoutes: Routes = [
    //Placing events/new first is important as if it's after events/:id angular assumes 
    // new  as id and processes that route

    //Adding route guard using a function
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, 
     resolve: {events: EventListResolver} },
    //Adding route guard using service below to canActivate
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: '404', component: Error404Component},
    { path: 'user', loadChildren: 'app/users/user.module#UserModule'}
]
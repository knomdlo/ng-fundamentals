import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component';

import { EventsListComponent,EventDetailsComponent, CreateEventComponent,EventListResolver,EventResolver, CreateSessionComponent} from './events/index'

export const appRoutes: Routes = [
    //Placing events/new first is important as if it's after events/:id angular assumes 
    // new  as id and processes that route

    //Adding route guard using a function
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, 
     resolve: {events: EventListResolver} },
    //Adding route guard using service below to canActivate
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: '404', component: Error404Component},
    { path: 'user', loadChildren: 'app/users/user.module#UserModule'},
    { path: 'events/sessions/new', component: CreateSessionComponent}
]
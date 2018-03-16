import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { ISession, IEvent } from "../shared";


@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event:any
    addMode: boolean
    filterBy: string = 'all'
    sortBy: string = 'name'

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        //This is listening to change in this.route.data object
        this.route.data.forEach((data) => {
            this.event = data['event']
            this.addMode = false;
        })
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        let nextId = Math.max.apply(null, this.event.sessions.map(s=> s.id))
        session.id = nextId +1

        this.event.sessions.push(session)
        //The
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false
    }

    cancelNewSession() {
        this.addMode = false;
    }

}
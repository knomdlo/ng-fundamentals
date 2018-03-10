import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { ISession } from "../shared";


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
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent
        (+this.route.snapshot.params['id'])
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        let nextId = Math.max.apply(null, this.event.sessions.map(s=> s.id))
        session.id = nextId +1

        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }

    cancelNewSession() {
        this.addMode = false;
    }

}
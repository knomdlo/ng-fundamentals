import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./shared/event.service";


@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventService) {

    }
    resolve(){
        //No .subscribe is needed here since this is the resolve method automatically subscribes to it
        return this.eventService.getEvents()
    }
}
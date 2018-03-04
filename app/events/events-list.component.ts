import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component(
  {
    template: `
        <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <div class = "row">
          <div *ngFor = "let event of events" class= "col-md-5">
            <events-thumbnail [event]= event></events-thumbnail>
          </div>
        </div>
        `
  }
)
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.events = this.route.snapshot.data['events']
  }
}
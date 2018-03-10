import { Component, Input } from '@angular/core'

@Component(
  {
    selector: 'events-thumbnail',
    template: `
        <div [routerLink] = "['/events', event.id]">
        <div class="well hoverwell thumbnail" >
         <h2>{{event.name | uppercase}}</h2>
            <div>Date: {{event.date | date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: {{event.price | currency:'INR':true}}</div>
            <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp,</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
        </div>`
  }
)
export class EventThumbnailComponent {
    @Input() event:any;
}
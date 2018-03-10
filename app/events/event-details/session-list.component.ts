import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[]
    @Input() filterBy: string
    visibleSessions: ISession[]

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            //A way of cloning a copy
            this.visibleSessions = this.sessions.slice(0)
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            })
        }
    }

}
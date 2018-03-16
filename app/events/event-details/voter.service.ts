import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';
import { Observable } from "rxjs/RX";
import { RequestOptions, Headers, Http, Response } from '@angular/http';

@Injectable()
export class VoterService {

    constructor(private http: Http) {}

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);
        
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url).catch(this.handleError)
        .subscribe()
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        //Self-subscribing since there's no real importance to returned value in the app/
        // no actions needed after the call returns(like state change etc)
        this.http.post(url, {}, options).
        catch(this.handleError).subscribe();
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }

    private handleError(error: Response) {
    return Observable.throw(error.statusText)
  }
}
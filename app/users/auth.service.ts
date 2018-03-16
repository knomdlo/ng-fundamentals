import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Observable } from "rxjs/RX";
import { RequestOptions, Headers, Http } from '@angular/http';

@Injectable()
export class AuthService {
    currentUser: IUser
    
    constructor(private http: Http) {

    }

    loginUser(userName:string, password: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let loginInfo = { username: userName, password: password };

        return this.http.post('/api/login', loginInfo, options).do(resp => {
            if(resp) {
                this.currentUser = <IUser>resp.json().user;
            }
        }).catch(error => {
            return Observable.of(false);
        })
    }

    isAuthenticated() {
        return !!this.currentUser
    }

    checkAuthenticationStatus() {
        return this.http.get('/api/currentIdentity').map(response => {
            let res: any = response;
            if(res._body) {
                return response.json();
            } else {
                return {}
            }
        })
        .do(currentUser => {
            if(!!currentUser.userName) {
                this.currentUser = currentUser;
            }
        }).subscribe()
    }

    updateUser(firstName: string, lastName:string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
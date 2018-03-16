import { Component } from '@angular/core'
import { AuthService } from './users/auth.service';

@Component(
  {
    template: `
    <nav-bar></nav-bar>
    <router-outlet><router-outlet>`,
    selector: 'events-app'
  }
)
export class EventsAppComponent {
  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
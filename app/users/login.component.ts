import { Component, OnInit } from '@angular/core';
import { containsTree } from '@angular/router/src/url_tree';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/users/login.component.html',
    styles: [`
        em { float: right; color: red; padding-left: 10px; }
    `]
})

export class LoginComponent implements OnInit {
    loginInvalid = false;
    constructor(private authService: AuthService, 
    private router: Router) { }

    ngOnInit() { }

    login(loginForm) {
        this.authService.loginUser(loginForm.userName,
        loginForm.password).subscribe(response => {
            if(response) {
                this.router.navigate(['events'])
            } else {
                this.loginInvalid = true;
            }
        })
    }

    cancel() {
        this.router.navigate(['events'])
    }
}
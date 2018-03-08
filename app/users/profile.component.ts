import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/users/profile.component.html',
  styles: [`
        em { float: right; color: red; padding-left: 10px; }
    `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
    let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel() {
    this.router.navigate(['events'])
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
  }
}
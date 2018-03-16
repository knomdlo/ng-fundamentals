import { Component, OnInit, Inject } from '@angular/core'
import { AuthService } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl: 'app/users/profile.component.html',
  styles: [`
        em { float: right; color: red; padding-left: 10px; }
    `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup

  constructor(private authService: AuthService, private router: Router,
              @Inject(TOASTR_TOKEN) private toastr:any) {

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
      this.authService.updateUser(formValues.firstName, formValues.lastName).subscribe(() => {
      this.toastr.success('Profile edited successfully')
      })
      // this.router.navigate(['events'])
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login'])
    })
  }
}
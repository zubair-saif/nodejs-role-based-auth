import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthsService } from '../auth.service';

@Component({
  selector: 'lib-signup-auth',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading = false;
  private authStatusSub;
  isfalse =  false;

  constructor(public authService: AuthsService) { }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.password);
    this.isLoading = false;
  }
}

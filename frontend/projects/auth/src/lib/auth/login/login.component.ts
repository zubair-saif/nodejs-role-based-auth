import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthsService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-login-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  isfalse = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthsService) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
        this.isfalse =  true;
      }
    );
  }

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }
}

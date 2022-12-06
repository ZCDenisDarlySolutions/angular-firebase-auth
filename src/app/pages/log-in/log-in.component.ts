import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';
import { FormFactory } from '@services/form';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  user = new FormGroup({
    email: FormFactory.control([Validators.email]),
    password: FormFactory.control(),
  });

  constructor(public authService: AuthService) {}

  get email() {
    return this.user.value.email ?? '';
  }

  get password() {
    return this.user.value.password ?? '';
  }

  forgotPassword() {
    this.authService.forgotPassword(this.email);
  }

  onSubmit() {
    this.authService.logIn(this.email, this.password);
  }
}

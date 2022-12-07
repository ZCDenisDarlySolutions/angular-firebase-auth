import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LINKS } from '@constants/router';

import { AuthService } from '@services/auth.service';
import { FormFactory } from '@services/form';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  user = new FormGroup({
    email: FormFactory.control(),
    password: FormFactory.control(),
  });

  constructor(public authService: AuthService) {}

  get link() {
    return {
      signUp: LINKS.signUp,
      forgotPassword: LINKS.forgotPassword,
    };
  }

  get email() {
    return this.user.value.email ?? '';
  }

  get password() {
    return this.user.value.password ?? '';
  }

  onSubmit() {
    this.authService.logIn(this.email, this.password);
  }
}

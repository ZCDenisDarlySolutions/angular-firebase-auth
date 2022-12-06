import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';
import { FormFactory } from '@services/form';
import { LocalStorage } from '@services/local-storage';

import { SIGN_UP_STEP_1 } from '@constants/local-storage';
import { PASSWORD_SYMBOL, PASSWORD_UPPERCASE } from '@constants/pattern';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  user = new FormGroup({
    email: FormFactory.control([Validators.email]),
    firstName: FormFactory.control(),
    lastName: FormFactory.control(),
    password: FormFactory.control(),
    repeatPassword: FormFactory.control(),
  });

  constructor(public authService: AuthService, private fb: FormBuilder) {}

  get passwordValid() {
    const password = this.user.value.password ?? '';
    return {
      symbol: PASSWORD_SYMBOL.test(password),
      upper: PASSWORD_UPPERCASE.test(password),
    };
  }

  get email() {
    return this.user.value.email ?? '';
  }

  get password() {
    return this.user.value.password ?? '';
  }

  onSubmit() {
    LocalStorage.set(SIGN_UP_STEP_1, this.user.value);
    // this.authService.signUp(this.email, this.password);
  }
}

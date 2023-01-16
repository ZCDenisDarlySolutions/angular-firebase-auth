import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SIGN_UP_STEP_1 } from '@constants/local-storage';
import { PASSWORD_SYMBOL, PASSWORD_UPPERCASE } from '@constants/pattern';

import { FormFactory } from '@services/form';
import { LocalStorageService } from '@services/local-storage.service';
import { isCorrectRepeatPassword } from '@services/validation';

@Component({
  selector: 'app-sign-up-first-step',
  templateUrl: './sign-up-first-step.component.html',
  styleUrls: ['./sign-up-first-step.component.scss'],
})
export class SignUpFirstStepComponent {
  user = new FormGroup(
    {
      email: FormFactory.control(),
      firstName: FormFactory.control(),
      lastName: FormFactory.control(),
      password: FormFactory.control(),
      repeatPassword: FormFactory.control(),
    },
    { validators: isCorrectRepeatPassword }
  );

  constructor(public storage: LocalStorageService) {}

  get passwordValid() {
    const password = this.password;
    return {
      length: password.length >= 8,
      symbol: PASSWORD_SYMBOL.test(password),
      upper: PASSWORD_UPPERCASE.test(password),
    };
  }

  get password() {
    return this.user.value.password ?? '';
  }

  onSubmit() {
    this.storage.set(SIGN_UP_STEP_1, this.user.value);
  }
}

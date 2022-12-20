import { Component } from '@angular/core';
import { LINKS } from '@constants/router';
import { FormFactory } from '@services/form';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  link = LINKS.signUp;

  email = FormFactory.control();

  // TODO add correct functional
  resendEmail() {
    console.error('Functional not added!');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent {
  // TODO load correct email
  email = 'test@email.com';

  // TODO add correct functional
  resendEmail() {
    console.error('Functional not added!');
  }
}

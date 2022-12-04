import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { from } from 'rxjs';

interface Form {
  password: string;
  email: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  user: Form = {
    email: '',
    password: '',
  };

  constructor(public authService: AuthService) {}

  get passwordValid() {
    const { password } = this.user;
    return {
      number: /\d/.test(password),
      lower: /[a-z]/.test(password),
      upper: /[A-Z]/.test(password),
      symbol: /[@$!%*?&_]/.test(password),
    };
  }

  onSubmit() {
    from(
      this.authService.signUp(this.user.email, this.user.password)
    ).subscribe({
      error: (error) => console.error(error),
    });
  }
}

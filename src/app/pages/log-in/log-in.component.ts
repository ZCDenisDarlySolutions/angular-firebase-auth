import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';

interface Form {
  password: string;
  email: string;
}

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  user: Form = {
    email: '',
    password: '',
  };

  constructor(public authService: AuthService) {}

  forgotPassword() {
    this.authService.forgotPassword(this.user.email);
  }

  onSubmit() {
    this.authService.logIn(this.user.email, this.user.password);
  }
}

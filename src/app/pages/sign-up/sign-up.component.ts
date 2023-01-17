import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SIGN_UP_ROUTE } from './sign-up.constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  public step: number = 1;

  constructor(private router: Router) {}

  ngOnInit() {
    this.step = this.router.url.endsWith(SIGN_UP_ROUTE.firstStep) ? 1 : 2;
  }
}

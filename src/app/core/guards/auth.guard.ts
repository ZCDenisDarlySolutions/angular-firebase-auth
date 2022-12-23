import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ROUTER } from '@constants/router';

import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate([ROUTER.logIn]);
    }
    return true;
  }
}

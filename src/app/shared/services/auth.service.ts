import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { USER } from '@constants/local-storage';

import { ROUTER } from '@constants/router';

import { LocalStorage } from '@services/local-storage';

import { User } from '@typings/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData?: User; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in local storage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      this.#formatUser(user);
      LocalStorage.set(USER, user ? this.userData : null);
    });
  }

  #getUser() {
    return LocalStorage.get<User>(USER)!;
  }

  #formatUser(user: any) {
    this.userData = {
      uid: user?.uid ?? '',
      email: user?.email ?? '',
      emailVerified: user?.emailVerified ?? false,
    };
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = this.#getUser();
    return !!user?.emailVerified;
  }

  // Sign in with email/password
  async logIn(email: string, password: string) {
    const result = await this.afAuth.signInWithEmailAndPassword(
      email,
      password
    );

    this.#formatUser(result.user);
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.router.navigate([ROUTER.content]);
      }
    });
  }

  // Sign up with email/password
  async signUp(email: string, password: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    this.#formatUser(result.user);
  }

  // Reset Forgot password
  async forgotPassword(passwordResetEmail: string) {
    this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  // Sign out
  async logOut() {
    await this.afAuth.signOut();
    LocalStorage.remove(USER);
    this.userData = undefined;
    this.router.navigate([ROUTER.logIn]);
  }
}

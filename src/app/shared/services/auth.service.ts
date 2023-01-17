import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

import { USER } from '@constants/local-storage';
import { ROUTER } from '@constants/router';

import { LocalStorageService } from './local-storage.service';

import { User } from '@typings/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData?: User;
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public storage: LocalStorageService
  ) {
    this.afAuth.authState.subscribe((user) => {
      this.#formatUser(user);
      this.storage.set(USER, user ? this.userData : null);
    });
  }

  #getUser() {
    return this.storage.get<User>(USER)!;
  }

  #formatUser(user: any) {
    this.userData = {
      uid: user?.uid ?? '',
      email: user?.email ?? '',
      emailVerified: user?.emailVerified ?? false,
    };
  }

  get isLoggedIn(): boolean {
    const user = this.#getUser();
    return !!user?.emailVerified;
  }

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

  async signUp(email: string, password: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    this.#formatUser(result.user);
  }

  async forgotPassword(passwordResetEmail: string) {
    this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logOut() {
    await this.afAuth.signOut();
    this.storage.remove(USER);
    this.userData = undefined;
    this.router.navigate([ROUTER.logIn]);
  }
}

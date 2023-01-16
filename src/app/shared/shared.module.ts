import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { LocalStorageService } from '@services/local-storage.service';

import { EmailInputComponent } from './components/email-input/email-input.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [PasswordInputComponent, EmailInputComponent],
  exports: [PasswordInputComponent, EmailInputComponent],
  providers: [LocalStorageService, AuthService],
})
export class SharedModule {}

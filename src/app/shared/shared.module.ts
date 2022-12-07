import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EmailInputComponent } from './components/email-input/email-input.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [PasswordInputComponent, EmailInputComponent],
  exports: [PasswordInputComponent, EmailInputComponent],
})
export class SharedModule {}

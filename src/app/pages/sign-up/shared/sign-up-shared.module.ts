import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared';

import { SignUpFirstStepComponent } from './components/sign-up-first-step/sign-up-first-step.component';
import { SignUpSecondStepComponent } from './components/sign-up-second-step/sign-up-second-step.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [SignUpFirstStepComponent, SignUpSecondStepComponent],
  exports: [SignUpFirstStepComponent, SignUpSecondStepComponent],
})
export class SignUpSharedModule {}

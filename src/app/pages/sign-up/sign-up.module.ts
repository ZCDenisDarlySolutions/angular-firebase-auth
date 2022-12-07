import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { SignUpFirstStepComponent } from './shared/components/sign-up-first-step/sign-up-first-step.component';
import { SignUpSecondStepComponent } from './shared/components/sign-up-second-step/sign-up-second-step.component';

@NgModule({
  declarations: [SignUpComponent, SignUpFirstStepComponent, SignUpSecondStepComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SignUpModule {}

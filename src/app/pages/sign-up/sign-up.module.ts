import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignUpSharedModule } from './shared/sign-up-shared.module';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, SignUpRoutingModule, SignUpSharedModule],
})
export class SignUpModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFirstStepComponent } from './shared/components/sign-up-first-step/sign-up-first-step.component';
import { SignUpSecondStepComponent } from './shared/components/sign-up-second-step/sign-up-second-step.component';
import { SignUpComponent } from './sign-up.component';
import { SIGN_UP_ROUTE } from './sign-up.constants';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    children: [
      { path: '', redirectTo: SIGN_UP_ROUTE.firstStep, pathMatch: 'full' },
      { path: SIGN_UP_ROUTE.firstStep, component: SignUpFirstStepComponent },
      { path: SIGN_UP_ROUTE.secondStep, component: SignUpSecondStepComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}

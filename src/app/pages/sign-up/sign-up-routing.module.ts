import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFirstStepComponent } from './shared/components/sign-up-first-step/sign-up-first-step.component';
import { SignUpSecondStepComponent } from './shared/components/sign-up-second-step/sign-up-second-step.component';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignUpComponent,
    children: [
      { path: '', redirectTo: 'first-step', pathMatch: 'full' },
      { path: 'first-step', component: SignUpFirstStepComponent },
      { path: 'second-step', component: SignUpSecondStepComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}

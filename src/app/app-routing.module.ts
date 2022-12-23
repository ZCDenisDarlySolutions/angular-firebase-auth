import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@guards/auth.guard';
import { BaseLayoutComponent } from '@layouts/base-layout/base-layout.component';

import { ROUTER } from '@constants/router';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTER.logIn,
    pathMatch: 'full',
  },
  {
    path: ROUTER.content,
    canActivate: [AuthGuard],
    component: BaseLayoutComponent,
    loadChildren: () =>
      import('./pages/content/content.module').then(
        (module) => module.ContentModule
      ),
  },
  {
    path: ROUTER.logIn,
    component: BaseLayoutComponent,
    loadChildren: () =>
      import('./pages/log-in/log-in.module').then(
        (module) => module.LogInModule
      ),
  },
  {
    path: ROUTER.signUp,
    component: BaseLayoutComponent,
    loadChildren: () =>
      import('./pages/sign-up/sign-up.module').then(
        (module) => module.SignUpModule
      ),
  },
  {
    path: ROUTER.forgotPassword,
    component: BaseLayoutComponent,
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (module) => module.ForgotPasswordModule
      ),
  },
  {
    path: ROUTER.verifyEmail,
    component: BaseLayoutComponent,
    loadChildren: () =>
      import('./pages/verify-email/verify-email.module').then(
        (module) => module.VerifyEmailModule
      ),
  },
  {
    path: ROUTER.resetPassword,
    component: BaseLayoutComponent,
    loadChildren: () =>
      import('./pages/reset-password/reset-password.module').then(
        (module) => module.ResetPasswordModule
      ),
  },
  { path: '**', redirectTo: ROUTER.logIn },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

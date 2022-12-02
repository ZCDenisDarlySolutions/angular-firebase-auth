import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/content/content.module').then(
        (module) => module.ContentModule
      ),
  },
  {
    path: 'log-in',
    loadChildren: () =>
      import('./pages/log-in/log-in.module').then(
        (module) => module.LogInModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./pages/sign-up/sign-up.module').then(
        (module) => module.SignUpModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (module) => module.ForgotPasswordModule
      ),
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

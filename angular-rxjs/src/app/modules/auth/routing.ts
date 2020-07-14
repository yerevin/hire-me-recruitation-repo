import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from '@app/modules/auth/components/login/login.component';
import { SignupFormComponent } from '@app/modules/auth/components/signup/signup.component';

const ROUTES: Routes = [
  // login
  {
    path: 'log-in',
    component: LoginFormComponent,
    pathMatch: 'full',
    data: { title: 'LOG IN' },
  },
  // signup
  {
    path: 'sign-up',
    component: SignupFormComponent,
    pathMatch: 'full',
    data: { title: 'SIGN UP' },
  },
];

export const ROUTING = RouterModule.forChild(ROUTES);

// Route for lazy loading
export const AUTH_ROUTE = {
  path: 'auth',
  loadChildren: () =>
    import('app/modules/auth/module').then((m) => m.AuthModule),
  canActivate: [],
};

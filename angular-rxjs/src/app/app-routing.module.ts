import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PageNotFoundComponent,
  BasicLayoutComponent,
} from './core/shared/components';

import { AuthGuard } from './modules/auth/services/guard';

import { AUTH_ROUTE } from '@app/modules/auth/routing';
import { TASK_ROUTE } from '@app/modules/task/routing';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full',
  },

  // App views
  {
    path: '',
    component: BasicLayoutComponent,
    children: [TASK_ROUTE],
    canActivate: [AuthGuard],
  },
  AUTH_ROUTE,
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './components/list/list.component';
import { TaskFormComponent } from './components/form/form.component';

const ROUTES: Routes = [
  // tasks
  {
    path: '',
    component: TaskListComponent,
    pathMatch: 'full',
    data: { title: 'TASKS' },
  },
  // task add
  {
    path: 'new',
    component: TaskFormComponent,
    canActivate: [],
    pathMatch: 'full',
    data: { title: 'TASK ADD' },
  },
  // task edit
  {
    path: ':id',
    component: TaskFormComponent,
    canActivate: [],
    pathMatch: 'full',
    data: { title: 'TASK EDIT' },
  },
];

export const ROUTING = RouterModule.forChild(ROUTES);

// Route for lazy loading
export const TASK_ROUTE = {
  path: 'task',
  loadChildren: () =>
    import('app/modules/task/module').then((m) => m.TaskModule),
  canActivate: [],
};

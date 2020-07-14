import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { SharedModule } from '@app/core/shared/shared.module';

import { ROUTING } from '@app/modules/task/routing';
import { TaskSharedModule } from '@app/modules/task/shared.module';

import { TaskListComponent } from './components/list/list.component';
import { TaskFormComponent } from './components/form/form.component';

@NgModule({
  declarations: [TaskListComponent, TaskFormComponent],
  exports: [TaskListComponent, TaskFormComponent],
  imports: [
    ROUTING,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TaskSharedModule,
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: ['core', 'task'] }],
})
export class TaskModule {}

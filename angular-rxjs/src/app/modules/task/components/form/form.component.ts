import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

import { finalize } from 'rxjs/operators';

import { TaskService } from '@app/modules/task/services/service';
import { Task, ITaskForm } from '@app/modules/task/interfaces/task';
import { FormGroup } from '@angular/forms';

/**
 * Component for display task screen
 */
@Component({
  selector: 'task-form',
  templateUrl: 'form.component.html',
})
export class TaskFormComponent {
  //region Properties

  taskId: string;

  task: Task = new Task();
  taskForm: FormGroup | any = this.formBuilder.group({
    name: new FormControl(this.task.name, Validators.required),
  });

  busy = {
    load: true,
    action: false,
  };

  //endregion

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskId = this.route.snapshot.params.id;

    if (this.taskId) {
      this.loadTask();
    } else {
      this.task = new Task();
      this.initializeForm();
      this.busy.load = false;
    }
  }

  loadTask() {
    this.busy.load = true;
    this.taskService
      .get(this.taskId)
      .pipe(finalize(() => (this.busy.load = false)))
      .subscribe(
        (response) => {
          this.task = response;
          this.initializeForm();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  create(formData: ITaskForm) {
    this.busy.action = true;
    this.taskService
      .create(formData)
      .pipe(finalize(() => (this.busy.action = false)))
      .subscribe(
        (response) => {
          this.router.navigate(['/task']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  update(formData: ITaskForm) {
    this.busy.action = true;
    this.taskService
      .update(this.taskId, formData)
      .pipe(finalize(() => (this.busy.action = false)))
      .subscribe(
        (response) => {
          this.router.navigate(['/task']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  initializeForm() {
    this.taskForm = this.formBuilder.group({
      name: new FormControl(this.task.name, Validators.required),
    });
  }

  onSubmit(formData: ITaskForm) {
    return this.taskId ? this.update(formData) : this.create(formData);
  }

  get name() {
    return this.taskForm.get('name');
  }
}

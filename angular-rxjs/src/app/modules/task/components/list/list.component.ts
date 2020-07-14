import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { finalize } from 'rxjs/operators';

import { TaskService } from '@app/modules/task/services/service';
import { Task } from '@app/modules/task/interfaces/task';
import { UserSessionService } from '@app/modules/user/services/user-session.service';

/**
 * Component for display task screen
 */
@Component({
  selector: 'task-list',
  templateUrl: 'list.component.html',
})
export class TaskListComponent {
  //region Properties

  tasks: Task[] = [];

  busy = {
    load: true,
  };

  //endregion

  constructor(
    public userSessionService: UserSessionService,
    private taskService: TaskService
  ) {
    this.loadTasks();
  }

  loadTasks() {
    this.busy.load = true;
    this.taskService
      .list()
      .pipe(finalize(() => (this.busy.load = false)))
      .subscribe(
        (response: Task[]) => {
          this.tasks = response;

          this.taskService.tasks.next(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  delete(taskId: number | any) {
    this.taskService.delete(taskId).subscribe(
      (response) => {
        this.loadTasks();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  trackById(index: number, item: Task) {
    return item._id;
  }
}

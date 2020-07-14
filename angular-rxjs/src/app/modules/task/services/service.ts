import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import {
  IResponseSuccess,
  IResponseError,
} from '@app/core/interfaces/response.interface';

import { TaskResource } from '@app/modules/task/resources/resource';
import { Task, ITaskForm } from '@app/modules/task/interfaces/task';

@Injectable()
export class TaskService {
  //region Properties

  tasks = new BehaviorSubject<Task[]>([]);
  currentTasks = this.tasks.asObservable();

  task = new BehaviorSubject<Task>(new Task());
  currentTask = this.task.asObservable();

  //endregion

  //region Events

  //endregion

  constructor(private taskResource: TaskResource) {}

  //region Accessors

  //endregion

  //region Behaviors

  /**
   * @inheritDoc
   */
  public list() {
    return this.taskResource.list();
  }

  /**
   * @inheritDoc
   */
  public get(id: string) {
    return this.taskResource.get(id);
  }

  /**
   * @inheritDoc
   */
  public create(task: ITaskForm) {
    return this.taskResource.create(task);
  }

  /**
   * @inheritDoc
   */
  public update(id: string, task: ITaskForm) {
    return this.taskResource.update(id, task);
  }

  /**
   * @inheritDoc
   */
  public delete(id: string) {
    return this.taskResource.delete(id);
  }

  //endregion
}

import { observable } from "mobx";

import { taskApi } from "modules/task/api/taskApi";

export interface ITask {
  _id: string;
  name: string;
}

export class TasksStore {
  @observable
  loading: boolean = true;

  @observable
  tasks: ITask[] = [];

  listTasks() {
    this.loading = true;
    return taskApi
      .listTasks()
      .then((response) => {
        this.tasks = response;
        return response;
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  getTask(id: string) {
    this.loading = true;
    return taskApi
      .get(id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  create(name: string) {
    this.loading = true;
    return taskApi
      .create(name)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  update(id: string, name: string) {
    this.loading = true;
    return taskApi
      .update(id, name)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  delete(id: string) {
    this.loading = true;
    return taskApi
      .delete(id)
      .then((response) => {
        this.listTasks();
        return response;
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}

export default new TasksStore();

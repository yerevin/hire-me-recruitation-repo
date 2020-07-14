import { taskApi } from 'src/modules/task/api/taskApi';

import { loadTasksRequest, loadTasksSuccess, loadTasksError } from './actions';

export const loadTasks = () => (dispatch) => {
  dispatch(loadTasksRequest);
  return taskApi
    .listTasks()
    .then((response) => {
      dispatch(loadTasksSuccess(response));
    })
    .catch((error) => {
      dispatch(loadTasksError(error));
      throw error;
    });
};

export const loadTask = (id: string) => {
  return taskApi.get(id);
};

export const deleteTask = (id: string) => {
  return taskApi.delete(id);
};

export const createTask = (data: { name: string }) => {
  return taskApi.create(data);
};

export const updateTask = (id: string, data: { name: string }) => {
  return taskApi.update(id, data);
};

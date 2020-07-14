import { api } from 'src/core/utils/api';

export const taskApi = {
  listTasks: function () {
    return api.get(`/task`);
  },

  get: function (id) {
    return api.get(`/task/${id}`);
  },

  create: function (data: { name: string }) {
    return api.post(`/task`, data);
  },

  update: function (id, data: { name: string }) {
    return api.put(`/task/${id}`, data);
  },

  delete: function (id) {
    return api.delete(`/task/${id}`);
  },
};

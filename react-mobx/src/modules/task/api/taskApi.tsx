import { api } from "core/utils/api";

export const taskApi = {
  listTasks: function () {
    return api.get(`/task`);
  },

  get: function (id) {
    return api.get(`/task/${id}`);
  },

  create: function (name) {
    return api.post(`/task`, { name });
  },

  update: function (id, name) {
    return api.put(`/task/${id}`, { name });
  },

  delete: function (id) {
    return api.delete(`/task/${id}`);
  },
};

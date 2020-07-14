import { api } from "core/utils/api";

export const authApi = {
  login: function (data) {
    return api.post(`/user/log-in`, data);
  },
  register: function (data) {
    return api.post(`/user/sign-up`, data);
  },
};

import { api } from 'src/core/utils/api';

export const authApi = {
  login: function (email, password) {
    return api
      .post(`/user/log-in`, {
        email: email,
        password: password,
      })
  },
  register: function (data) {
    return api.post(`/user/sign-up`, data);
  },
};

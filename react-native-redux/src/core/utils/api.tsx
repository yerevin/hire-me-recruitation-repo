import { request } from 'src/core/utils/request';

export const api = {
  get: function (url, query?) {
    return request(url, { query });
  },
  post: function (url, payload) {
    return request(url, {
      method: 'POST',
      data: payload,
    });
  },
  put: function (url, payload) {
    return request(url, {
      method: 'PUT',
      data: payload,
    });
  },
  delete: function (url) {
    return request(url, { method: 'DELETE' });
  },
};

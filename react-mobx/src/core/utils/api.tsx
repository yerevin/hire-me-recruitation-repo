import { toJS } from "mobx";

import { request } from "core/utils/request";

export const api = {
  get: function(url, query?) {
    return request(url, { query: toJS(query) })
      .then(data => data)
      .catch(err => err);
  },
  post: function(url, payload) {
    return request(url, {
      method: "POST",
      data: payload
    })
      .then(data => data)
      .catch(err => err);
  },
  put: function(url, payload) {
    return request(url, {
      method: "PUT",
      data: payload
    })
      .then(data => data)
      .catch(err => err);
  },
  delete: function(url) {
    return request(url, { method: "DELETE" })
      .then(data => data)
      .catch(err => err);
  }
};

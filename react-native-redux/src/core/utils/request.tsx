import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import queryString from 'query-string';

import { config } from 'src/config/config';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastAndroid } from 'react-native';
const { apiUrl } = config;

export interface AxiosRequestConfigExtended extends AxiosRequestConfig {
  query?: Object;
  multipart?: boolean;
}

const paramsFromArray = (queryPassed: Object) => {
  const query = queryString.stringify(queryPassed, { arrayFormat: 'bracket' });
  console.log('queryParams', query);
  return query;
};

const instance = axios.create({
  baseURL: `${apiUrl}`,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  paramsSerializer: function (params) {
    return paramsFromArray(params);
  },
});

const showErrorToast = () => {
  ToastAndroid.show('Something went wrong!', ToastAndroid.SHORT);
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error): Promise<{ error: any }> => {
    console.log('errorCatcher 2', error, error.response);
    const { response } = error;
    if (response.status === 422) {
      console.log('422 Error', response);
    } else if (response.status === 404) {
      console.log('404 Error', response);
    } else if (response.status === 401) {
      console.log('Authorization 401 Error', response);
    } else if (response.status === 500) {
      console.log('Authorization 500 Error', response);
    }
    showErrorToast();
    return Promise.reject(response.data);
  },
);

export const request = async (
  url: string,
  config: AxiosRequestConfigExtended = {
    method: 'GET',
  },
) => {
  let requestConfig: AxiosRequestConfigExtended = {
    url,
    headers: {
      Authorization: `Bearer ${await AsyncStorage.getItem('accessToken')}`,
    },
    ...config,
  };

  if (config.multipart) {
    requestConfig.headers['Content-Type'] = 'multipart/form-data';
  }

  console.log('Sending request: ', url, 'with data: ', requestConfig);
  return instance
    .request(requestConfig)
    .then((response: AxiosResponse) => {
      console.log('response: ', response.data);
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw error;
    });
};

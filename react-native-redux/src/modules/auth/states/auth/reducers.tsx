import { createReducer } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

import {
  loginRequest,
  loginSuccess,
  loginError,
  registerRequest,
  registerSuccess,
  registerError,
  logout,
  initToken,
} from './actions';

const INITIAL_STATE: any = {
  loading: true,
  error: null,
  token: null,
};

const authReducer = createReducer(INITIAL_STATE, (builder) =>
  builder

    // login
    .addCase(loginRequest, (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }))
    .addCase(loginSuccess, (state, action) => {
      AsyncStorage.setItem('accessToken', action.payload.accessToken);

      return {
        ...state,
        token: action.payload.accessToken,
        loading: false,
        error: null,
      };
    })
    .addCase(loginError, (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }))

    // register
    .addCase(registerRequest, (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }))
    .addCase(registerSuccess, (state, action) => {
      AsyncStorage.setItem('accessToken', action.payload.accessToken);

      return {
        ...state,
        token: action.payload.accessToken,
        loading: false,
        error: null,
      };
    })
    .addCase(registerError, (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }))

    .addCase(logout, (state, action) => {
      AsyncStorage.removeItem('accessToken');

      return { ...state, token: null };
    })

    .addCase(initToken, (state, action) => {
      return { ...state, token: action.payload, loading: false };
    }),
);

export default authReducer;

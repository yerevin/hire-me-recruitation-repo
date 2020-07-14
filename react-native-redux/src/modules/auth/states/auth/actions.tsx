import { createAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';

export const loginRequest = createAction<null>('loginRequest');
export const loginSuccess = createAction<any>('loginSuccess');
export const loginError = createAction<any>('loginError');

export const registerRequest = createAction<null>('registerRequest');
export const registerSuccess = createAction<any>('registerSuccess');
export const registerError = createAction<any>('registerError');

export const logout = createAction<null>('logout');
export const initToken = createAction<string>('initToken');
export const initTokenLoad = () => async (dispatch) => {
  let token = await AsyncStorage.getItem('accessToken');
  return dispatch(initToken(token));
};

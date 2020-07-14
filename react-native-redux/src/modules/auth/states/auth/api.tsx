import { authApi } from 'src/modules/auth/api/authApi';
import {
  loginRequest,
  loginSuccess,
  loginError,
  registerRequest,
  registerSuccess,
  registerError,
} from './actions';

export const login = ({ email, password }) => (dispatch) => {
  dispatch(loginRequest);
  return authApi
    .login(email, password)
    .then((response) => {
      return dispatch(loginSuccess(response));
    })
    .catch((error) => {
      dispatch(loginError(error));
      throw error
    });
};

export const register = (data) => (dispatch) => {
  dispatch(registerRequest);
  return authApi
    .register(data)
    .then((response) => {
      return dispatch(registerSuccess(response));
    })
    .catch((error) => {
      dispatch(registerError(error));
      throw error
    });
};

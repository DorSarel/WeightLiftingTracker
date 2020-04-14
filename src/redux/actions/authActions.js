import * as types from './actionTypes';
import { loginUser } from '../../api/authApi';

export const loginSuccess = (userId) => {
  return { type: types.LOGIN_SUCCESS, uid: userId };
};

export const signIn = (credentials) => {
  return (dispatch, getState) => {
    return loginUser(credentials)
      .then((userId) => {
        dispatch(loginSuccess(userId));
      })
      .catch((error) => {
        throw error;
      });
  };
};

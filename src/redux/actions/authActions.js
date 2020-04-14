import * as types from './actionTypes';
import { loginUser, registerUser, logoutUser } from '../../api/authApi';
import { setUserInformation } from '../../api/userInfoApi';

export const loginSuccess = (userId) => {
  return { type: types.LOGIN_SUCCESS, uid: userId };
};

export const registerSuccess = (userId) => {
  return { type: types.REGISTER_SUCCESS, uid: userId };
};

export const logoutSuccess = () => {
  return { type: types.LOGOUT_SUCCESS };
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

export const signUp = (credentials, userData) => {
  return (dispatch) => {
    return registerUser(credentials).then((userId) => {
      return setUserInformation(userId, userData).then(() => {
        dispatch(registerSuccess(userId));
      });
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return logoutUser().then(() => {
      dispatch(logoutSuccess());
    });
  };
};

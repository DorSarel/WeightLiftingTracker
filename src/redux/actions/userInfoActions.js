import * as types from './actionTypes';
import {
  getUserInformation,
  updateUserInformation,
} from '../../api/userInfoApi';

export function loadUserInfoSuccess(userInfo) {
  return { type: types.LOAD_USER_INFO_SUCCESS, userInfo };
}

export function updateUserInfoSuccess(userInfo) {
  return { type: types.UPDATE_USER_INFO_SUCCESS, userInfo };
}

export function loadUserInfo() {
  return function (dispatch) {
    return getUserInformation()
      .then((data) => {
        dispatch(loadUserInfoSuccess(data));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateUserInfo(userKey, updatedUserInfo) {
  return function (dispatch) {
    return updateUserInformation(userKey, updatedUserInfo)
      .then(() => {
        dispatch(updateUserInfoSuccess(updatedUserInfo));
      })
      .catch((error) => {
        throw error;
      });
  };
}

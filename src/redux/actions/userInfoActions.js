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

export function loadUserInfo(uid) {
  return function (dispatch) {
    return getUserInformation(uid)
      .then((data) => {
        dispatch(loadUserInfoSuccess(data));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateUserInfo(uid, updatedUserInfo) {
  return function (dispatch) {
    return updateUserInformation(uid, updatedUserInfo)
      .then(() => {
        dispatch(updateUserInfoSuccess(updatedUserInfo));
      })
      .catch((error) => {
        throw error;
      });
  };
}

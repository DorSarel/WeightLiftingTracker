import * as types from './actionTypes';
import { getUserInfo, saveUserInfo } from '../../api/userInfoApi';

export function loadUserInfoSuccess(dbKey, userInfo) {
  return { type: types.LOAD_USER_INFO_SUCCESS, dbKey, userInfo };
}

export function updateUserInfoSuccess(userInfo) {
  return { type: types.UPDATE_USER_INFO_SUCCESS, userInfo };
}

export function loadUserInfo() {
  return function (dispatch) {
    return getUserInfo()
      .then((data) => {
        const dbKey = Object.keys(data)[0];
        dispatch(loadUserInfoSuccess(dbKey, data[dbKey]));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateUserInfo(dbKey, updatedUserInfo) {
  return function (dispatch) {
    return saveUserInfo(dbKey, updatedUserInfo)
      .then((data) => {
        dispatch(updateUserInfoSuccess(data));
      })
      .catch((error) => {
        throw error;
      });
  };
}

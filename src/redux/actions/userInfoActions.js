import * as types from './actionTypes';
import { getUserInfo } from '../../api/userInfoApi';

export function loadUserInfoSuccess(userInfo) {
  return { type: types.LOAD_INFO_SUCCESS, userInfo };
}

export function loadUserInfo() {
  return function (dispatch) {
    return getUserInfo().then((data) => {
      dispatch(loadUserInfoSuccess(data));
    });
  };
}

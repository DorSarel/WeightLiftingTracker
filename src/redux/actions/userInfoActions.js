import * as types from './actionTypes';

export function loadUserInfo(userInfo) {
  return { type: types.LOAD_INFO_SUCCESS, userInfo };
}

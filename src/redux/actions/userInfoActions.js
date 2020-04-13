import * as types from './actionTypes';
import { getUserInfo } from '../../api/userInfoApi';

export function loadUserInfoSuccess(userInfo) {
  return { type: types.LOAD_USER_INFO_SUCCESS, userInfo };
}

export function updateUserInfoSuccess(userInfo) {
  return { type: types.UPDATE_USER_INFO_SUCCESS, userInfo };
}

export function loadUserInfo() {
  return function (dispatch) {
    return getUserInfo()
      .then((data) => {
        dispatch(loadUserInfoSuccess(data));
      })
      .catch((error) => {
        throw error;
      });
  };
}

// export function updateUserInfo(dbKey, updatedUserInfo) {
//   return function (dispatch) {
//     return saveUserInfo(dbKey, updatedUserInfo)
//       .then((data) => {
//         dispatch(updateUserInfoSuccess(data));
//       })
//       .catch((error) => {
//         throw error;
//       });
//   };
// }

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userInfoReducer(state = initialState.userInfo, action) {
  switch (action.type) {
    case types.LOAD_USER_INFO_SUCCESS:
      return { ...state, info: { ...action.userInfo }, dbKey: action.dbKey };
    case types.UPDATE_USER_INFO_SUCCESS:
      return { ...state, info: { ...action.userInfo } };
    default:
      return state;
  }
}

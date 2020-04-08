import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userInfoReducer(state = initialState.userInfo, action) {
  switch (action.type) {
    case types.LOAD_INFO_SUCCESS:
      return state;
    default:
      return state;
  }
}

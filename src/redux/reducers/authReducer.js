import * as types from '../actions/actionTypes';
import initialState from './initialState';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        uid: action.uid,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;

import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer';
import weightsReducer from './weightsReducer';
import authReducer from './authReducer';

export default combineReducers({
  userInfo: userInfoReducer,
  userWeights: weightsReducer,
  auth: authReducer,
});

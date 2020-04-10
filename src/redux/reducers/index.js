import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer';
import weightsReducer from './weightsReducer';

export default combineReducers({
  userInfo: userInfoReducer,
  userWeights: weightsReducer,
});

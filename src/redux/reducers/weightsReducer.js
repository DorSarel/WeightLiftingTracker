import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function weightsReducer(
  state = initialState.userWeights,
  action
) {
  switch (action.type) {
    case types.LOAD_EXERCISES_WEIGHTS_SUCCESS:
      return {
        ...state,
        dbKey: action.dbKey,
        weights: {
          ...action.weights,
        },
      };
    case types.SAVE_EXERCISE_WEIGHT_SUCCESS:
      return {
        ...state,
        dbKey: action.dbKey,
      };
    default:
      return state;
  }
}

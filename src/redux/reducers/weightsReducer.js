import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function weightsReducer(
  state = initialState.userWeights,
  action
) {
  switch (action.type) {
    case types.SAVE_EXERCISE_WEIGHT_SUCCESS:
      return {
        ...state,
        ...action.exerciseToSave,
      };
    default:
      return state;
  }
}

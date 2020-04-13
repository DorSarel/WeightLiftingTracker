import * as types from './actionTypes';
import { loadWeights, saveWeight } from '../../api/weightApi';

export function loadExerecisesWeightsSuccess(weights) {
  return { type: types.LOAD_EXERCISES_WEIGHTS_SUCCESS, weights };
}

export function saveExerciseWeightSuccess(exerciseToSave) {
  return { type: types.SAVE_EXERCISE_WEIGHT_SUCCESS, exerciseToSave };
}

export function loadUserWeights(userKey) {
  return function (dispatch) {
    return loadWeights(userKey)
      .then((weights) => {
        dispatch(loadExerecisesWeightsSuccess(weights));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveNewExerciseWeight(
  exerciseToSave,
  userKey,
  shouldSetExercise
) {
  return function (dispatch) {
    return saveWeight(userKey, exerciseToSave, shouldSetExercise)
      .then(() => {
        dispatch(saveExerciseWeightSuccess(exerciseToSave));
      })
      .catch((error) => {
        throw error;
      });
  };
}

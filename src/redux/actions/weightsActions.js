import * as types from './actionTypes';
import { loadWeights, saveWeight, removeWeight } from '../../api/weightApi';

export function loadExerecisesWeightsSuccess(weights) {
  return { type: types.LOAD_EXERCISES_WEIGHTS_SUCCESS, weights };
}

export function saveExerciseWeightSuccess(exerciseToSave) {
  return { type: types.SAVE_EXERCISE_WEIGHT_SUCCESS, exerciseToSave };
}

export function removeExerciseWeightSuccess(exerciseToRemove) {
  return { type: types.REMOVE_EXERCISE_WEIGHT_SUCCESS, exerciseToRemove };
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

export function saveNewExerciseWeight(exerciseToSave, uid, shouldSetExercise) {
  return function (dispatch) {
    return saveWeight(uid, exerciseToSave, shouldSetExercise)
      .then(() => {
        dispatch(saveExerciseWeightSuccess(exerciseToSave));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function removeExerciseWeight(exerciseToRemove, uid) {
  return function (dispatch) {
    return removeWeight(uid, exerciseToRemove).then(() => {
      dispatch(removeExerciseWeightSuccess(exerciseToRemove));
    });
  };
}

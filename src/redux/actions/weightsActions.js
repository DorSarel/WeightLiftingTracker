import * as types from './actionTypes';
import { loadWeights, saveWeight } from '../../api/weightApi';

export function loadExerecisesWeightsSuccess(dbKey, weights) {
  return { type: types.LOAD_EXERCISES_WEIGHTS_SUCCESS, dbKey, weights };
}

export function saveExerciseWeightSuccess(exerciseToSave) {
  return { type: types.SAVE_EXERCISE_WEIGHT_SUCCESS, exerciseToSave };
}

export function loadUserWeights() {
  return function (dispatch) {
    return loadWeights()
      .then((data) => {
        if (!data) return;
        const dbKey = Object.keys(data)[0];
        dispatch(loadExerecisesWeightsSuccess(dbKey, data[dbKey]));
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

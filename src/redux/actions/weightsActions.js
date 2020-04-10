import * as types from './actionTypes';
import { loadWeights, saveWeight } from '../../api/weightApi';

export function loadExerecisesWeightsSuccess(dbKey, weights) {
  return { type: types.LOAD_EXERCISES_WEIGHTS_SUCCESS, dbKey, weights };
}

export function saveExerciseWeightSuccess(dbKey) {
  return { type: types.SAVE_EXERCISE_WEIGHT_SUCCESS, dbKey };
}

export function updateExerciseWeightSuccess(updatedWeight) {
  return { type: types.UPDATE_EXERCISE_WEIGHT_SUCCESS, updatedWeight };
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

export function saveNewExercise(newWeight, dbKey) {
  return function (dispatch) {
    return saveWeight(newWeight)
      .then((data) => {
        if (!dbKey) {
          const dbKey = Object.keys(data)[0];
          dispatch(saveExerciseWeightSuccess(data[dbKey]));
        } else {
          dispatch(updateExerciseWeightSuccess(newWeight));
        }
      })
      .catch((error) => {
        throw error;
      });
  };
}

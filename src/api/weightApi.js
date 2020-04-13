import { firestoreDB } from '../config/fbConfig';

export function loadWeights() {
  // return fetch(baseURL + '.json')
  //   .then((response) => response.json())
  //   .catch((error) => {
  //     throw error;
  //   });
}

export function saveWeight(userKey, exerciseToSave, shouldSetExercise) {
  if (shouldSetExercise) {
    return firestoreDB.collection('weights').doc(userKey).set(exerciseToSave);
  }
  return firestoreDB.collection('weights').doc(userKey).update(exerciseToSave);
}

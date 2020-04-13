import { firestoreDB } from '../config/fbConfig';

export function loadWeights(userKey) {
  return firestoreDB
    .collection('weights')
    .doc(userKey)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      }
      return null;
    });
}

export function saveWeight(userKey, exerciseToSave, shouldSetExercise) {
  if (shouldSetExercise) {
    return firestoreDB.collection('weights').doc(userKey).set(exerciseToSave);
  }
  return firestoreDB.collection('weights').doc(userKey).update(exerciseToSave);
}

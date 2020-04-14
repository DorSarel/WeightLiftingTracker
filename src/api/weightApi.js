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

export function saveWeight(uid, exerciseToSave, shouldSetExercise) {
  const exerciseRef = firestoreDB.collection('weights').doc(uid);
  if (shouldSetExercise) {
    return exerciseRef.set(exerciseToSave);
  }
  return exerciseRef.update(exerciseToSave);
}

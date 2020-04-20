import firebase, { firestoreDB } from '../config/fbConfig';

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
    })
    .catch((error) => {
      throw error;
    });
}

export function saveWeight(uid, exerciseToSave, shouldSetExercise) {
  const exerciseRef = firestoreDB.collection('weights').doc(uid);
  if (shouldSetExercise) {
    return exerciseRef.set(exerciseToSave);
  }
  return exerciseRef.update(exerciseToSave);
}

export function removeWeight(uid, exerciseToRemove) {
  return firestoreDB
    .collection('weights')
    .doc(uid)
    .update({
      [exerciseToRemove]: firebase.firestore.FieldValue.delete(),
    });
}

import { firestoreDB } from '../config/fbConfig';

export function getUserInformation(uid) {
  return firestoreDB
    .collection('users')
    .doc(uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      }
      return null;
    });
}

export function updateUserInformation(uid, updatedUserInfo) {
  return firestoreDB.collection('users').doc(uid).update(updatedUserInfo);
}

export function setUserInformation(uid, userData) {
  return firestoreDB.collection('users').doc(uid).set(userData);
}

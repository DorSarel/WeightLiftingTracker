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
    })
    .catch((error) => {
      throw error;
    });
}

export function updateUserInformation(uid, updatedUserInfo) {
  return firestoreDB
    .collection('users')
    .doc(uid)
    .update(updatedUserInfo)
    .catch((error) => {
      throw error;
    });
}

export function setUserInformation(uid, userData) {
  return firestoreDB
    .collection('users')
    .doc(uid)
    .set(userData)
    .catch((error) => {
      throw error;
    });
}

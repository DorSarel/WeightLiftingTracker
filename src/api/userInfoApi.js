import { firestoreDB } from '../config/fbConfig';

export function getUserInformation() {
  return firestoreDB
    .collection('users')
    .get()
    .then((snapshot) => snapshot.docs[0].data());
}

export function updateUserInformation(userKey, updatedUserInfo) {
  return firestoreDB.collection('users').doc(userKey).update(updatedUserInfo);
}

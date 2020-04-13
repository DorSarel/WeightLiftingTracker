import { firestoreDB } from '../config/fbConfig';

export function getUserInfo() {
  return firestoreDB
    .collection('users')
    .get()
    .then((snapshot) => snapshot.docs[0].data());
}

// export function saveUserInfo(dbKey, updatedUserInfo) {
//   return fetch(baseURL + `/${dbKey}.json`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedUserInfo),
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       throw error;
//     });
// }

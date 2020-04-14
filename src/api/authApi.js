import firebase, { firestoreDB } from '../config/fbConfig';

export const loginUser = ({ email, password }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((authObj) => authObj.user.uid)
    .catch((error) => {
      throw error;
    });
};

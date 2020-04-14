import firebase from '../config/fbConfig';

export const loginUser = ({ email, password }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((authObj) => authObj.user.uid)
    .catch((error) => {
      throw error;
    });
};

export const registerUser = ({ email, password }) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((authObj) => authObj.user.uid)
    .catch((error) => {
      throw error;
    });
};

export const logoutUser = () => {
  return firebase.auth().signOut();
};

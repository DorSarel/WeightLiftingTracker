import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBg5wiXQuEkXAcmKm0zBTDrEyyZ9XrGztg',
  authDomain: 'weightliftingtracker-ea4e9.firebaseapp.com',
  databaseURL: 'https://weightliftingtracker-ea4e9.firebaseio.com',
  projectId: 'weightliftingtracker-ea4e9',
  storageBucket: 'weightliftingtracker-ea4e9.appspot.com',
  messagingSenderId: '559044560608',
  appId: '1:559044560608:web:7f2003839023511abd3285',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestoreDB = firebase.firestore();

export default firebase;

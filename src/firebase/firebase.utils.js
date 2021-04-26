import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAg1-q7v0uL1lwTUiPmgJLrO-u1r5Rl6HY",
  authDomain: "crwn-db-d5906.firebaseapp.com",
  projectId: "crwn-db-d5906",
  storageBucket: "crwn-db-d5906.appspot.com",
  messagingSenderId: "948205173352",
  appId: "1:948205173352:web:73e1f7fb55e3a34d4ad9dd"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

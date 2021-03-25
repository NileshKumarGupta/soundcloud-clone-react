import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

// remove localhost before pushing

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();

export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider);
};

export const signInWithFacebook = () => {
  auth.signInWithPopup(facebookProvider);
};

export const signUpWithEmail = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => console.log(err));
};

export const signInWithEmail = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .catch((err) => console.log(err));
};

export const db = firebase.firestore();

export const storage = firebase.storage();

export default app;

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBcCiqQgJTF3pbwWPNhh9Zv2ta1BP3c3w",
  authDomain: "e-clone-69f72.firebaseapp.com",
  projectId: "e-clone-69f72",
  storageBucket: "e-clone-69f72.appspot.com",
  messagingSenderId: "72454280193",
  appId: "1:72454280193:web:08e8c22c0df6a1578f9c00"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
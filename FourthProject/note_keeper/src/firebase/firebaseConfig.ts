import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQh1g4iNPo0xMuo8xQFG9wwrMYKk4xFJM",
  authDomain: "note-kepper.firebaseapp.com",
  projectId: "note-kepper",
  storageBucket: "note-kepper.appspot.com",
  messagingSenderId: "502538168033",
  appId: "1:502538168033:web:495e96cee46155f20d79a0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

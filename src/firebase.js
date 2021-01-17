import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVg3qbKteULkkGZDOzZjGNLvrTLQIjwio",
  authDomain: "crud-bluweb-318cc.firebaseapp.com",
  projectId: "crud-bluweb-318cc",
  storageBucket: "crud-bluweb-318cc.appspot.com",
  messagingSenderId: "1052928161986",
  appId: "1:1052928161986:web:210bbe2d5c5d22aded635b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyA5JlSbN5p0FKyNKkFt71YghOjuMoYtuC0",
  authDomain: "smackchat-eb0f3.firebaseapp.com",
  databaseURL: "https://smackchat-eb0f3-default-rtdb.firebaseio.com",
  projectId: "smackchat-eb0f3",
  storageBucket: "smackchat-eb0f3.appspot.com",
  messagingSenderId: "724298650263",
  appId: "1:724298650263:web:870f2b02c60484c3808fd2",
  measurementId: "G-JLL7MX6X50"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }

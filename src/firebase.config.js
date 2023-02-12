// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
//import { getFirestore } from "firebase/firestore";
import { 
  getAuth, 
  createUserWithEmailAndPassword,  
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut , updateProfile
  } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5PjFxahTUeKrglpc0jLIi6gB1hXJvuX0",
  authDomain: "redux-bbccc.firebaseapp.com",
  projectId: "redux-bbccc",
  storageBucket: "redux-bbccc.appspot.com",
  messagingSenderId: "727967545227",
  appId: "1:727967545227:web:dc1b42f4cb2e77f47de18e"
};

initializeApp(firebaseConfig);

// Initialize Firebase
const auth = getAuth();

export {
auth,
createUserWithEmailAndPassword,

onAuthStateChanged,
signInWithEmailAndPassword,
signOut, updateProfile
}
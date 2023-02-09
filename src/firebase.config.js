// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtxkMab_xBxR5WIMlaGRRSPZXjss5MVGQ",
  authDomain: "online-therapy-73a58.firebaseapp.com",
  projectId: "online-therapy-73a58",
  storageBucket: "online-therapy-73a58.appspot.com",
  messagingSenderId: "459722755288",
  appId: "1:459722755288:web:3e0895f41a35b993271bad",
  measurementId: "G-43P5JVLP4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
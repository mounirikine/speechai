// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: "crud-76b87.firebaseapp.com",
  projectId: "crud-76b87",
  storageBucket: "crud-76b87.appspot.com",
  messagingSenderId: "44545947163",
  appId: "1:44545947163:web:4ff5cc3091c4f07d8faabe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
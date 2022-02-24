
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd8_cRm--iO5RCQwTvc3_LjAoTEH8oaIQ",
  authDomain: "rj-24895-a0899.firebaseapp.com",
  projectId: "rj-24895-a0899",
  storageBucket: "rj-24895-a0899.appspot.com",
  messagingSenderId: "29922763534",
  appId: "1:29922763534:web:1aad092002bb3540802d5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


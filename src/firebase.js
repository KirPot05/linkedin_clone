// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-8Ld-Tll6G-6WnpeEOzudAGXmOOgCrZM",
  authDomain: "linkedin-clone-abedf.firebaseapp.com",
  projectId: "linkedin-clone-abedf",
  storageBucket: "linkedin-clone-abedf.appspot.com",
  messagingSenderId: "921263581100",
  appId: "1:921263581100:web:0b1545151d0544d5383c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};
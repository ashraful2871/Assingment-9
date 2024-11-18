// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqTPrqRjoTIaqfAtarL9LrAy7xLwL6kIo",
  authDomain: "ssignment-9.firebaseapp.com",
  projectId: "ssignment-9",
  storageBucket: "ssignment-9.firebasestorage.app",
  messagingSenderId: "937826975239",
  appId: "1:937826975239:web:476faa53a8e8bb5925b4a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

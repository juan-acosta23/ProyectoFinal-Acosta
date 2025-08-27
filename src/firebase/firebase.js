// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL7F8RhCLUox62uj8j1AmuchjDYIkN0Ss",
  authDomain: "curso-react-acosta.firebaseapp.com",
  projectId: "curso-react-acosta",
  storageBucket: "curso-react-acosta.firebasestorage.app",
  messagingSenderId: "848731783208",
  appId: "1:848731783208:web:0824c1a7747c0b337d351d",
  measurementId: "G-MT1W008ZP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
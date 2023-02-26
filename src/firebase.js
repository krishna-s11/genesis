// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLbpTgNPaw1LBrRcT5Bnf6T68TRoN0eGw",
  authDomain: "genesis-378309.firebaseapp.com",
  projectId: "genesis-378309",
  storageBucket: "genesis-378309.appspot.com",
  messagingSenderId: "806345698642",
  appId: "1:806345698642:web:ee9914f1b0e5523d0ade8b",
  measurementId: "G-Z1KNP523RL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

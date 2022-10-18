// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS1n7S3jOVF9fUfxR1D2-FJIhyzqzDUmw",
  authDomain: "react-realtor-6780c.firebaseapp.com",
  projectId: "react-realtor-6780c",
  storageBucket: "react-realtor-6780c.appspot.com",
  messagingSenderId: "965197311793",
  appId: "1:965197311793:web:e9b6df70776604fb974a10",
  measurementId: "G-PH4QS52N1Y"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db= getFirestore();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmtCrG77Fs3X5EZd9DpoaRv0zYJQb9J_8",
  authDomain: "my-dictionary2.firebaseapp.com",
  projectId: "my-dictionary2",
  storageBucket: "my-dictionary2.appspot.com",
  messagingSenderId: "122805387559",
  appId: "1:122805387559:web:44255f8d7f67f6563c6902",
  measurementId: "G-886EDKSWRW",
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const analytics = getAnalytics(app);

export const db = getFirestore();

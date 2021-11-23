// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDrt-k9HF0CJYsUKLsfgK3Fq2hlXig2t0",
  authDomain: "my-dictionary-3b0b3.firebaseapp.com",
  projectId: "my-dictionary-3b0b3",
  storageBucket: "my-dictionary-3b0b3.appspot.com",
  messagingSenderId: "959166715135",
  appId: "1:959166715135:web:4618c820a1ff05685768ca",
  measurementId: "G-Q91JW58E9B",
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const analytics = getAnalytics(app);

export const db = getFirestore();

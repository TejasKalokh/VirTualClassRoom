// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATjDmO1S9F50ExYwu2vpFRuITQgKUnKwk",
  authDomain: "apsitvrclassroom.firebaseapp.com",
  projectId: "apsitvrclassroom",
  storageBucket: "apsitvrclassroom.appspot.com",
  messagingSenderId: "568951914454",
  appId: "1:568951914454:web:eb4b98aae07606bcf5ae77",
  measurementId: "G-9MFPX2KBPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
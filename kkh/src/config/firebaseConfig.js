// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUqUMlDL6fWYSLus2h5eKQDSzMZaOcJzs",
  authDomain: "profile-bbda5.firebaseapp.com",
  projectId: "profile-bbda5",
  storageBucket: "profile-bbda5.appspot.com",
  messagingSenderId: "965609803721",
  appId: "1:965609803721:web:4269a0bb6748484fcfe218",
  measurementId: "G-4QG63856ZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

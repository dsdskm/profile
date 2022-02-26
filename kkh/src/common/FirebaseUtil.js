
import { initializeApp } from "firebase/app";

export const initFirebaseApp = () => {
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
  initializeApp(firebaseConfig);
};

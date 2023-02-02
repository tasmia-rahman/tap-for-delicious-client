// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlI1azioE5waRznGiISAZ-bJJXQju_eDc",
  authDomain: "tap-for-delicious.firebaseapp.com",
  projectId: "tap-for-delicious",
  storageBucket: "tap-for-delicious.appspot.com",
  messagingSenderId: "880324132747",
  appId: "1:880324132747:web:88ba6968e07a820a09b98e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
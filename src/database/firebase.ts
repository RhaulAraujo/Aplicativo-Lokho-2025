// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD9WwAnJtqF5p2J8xVkREteEE9qqaLDIc",
 // authDomain: "lokho1.firebaseapp.com",
  projectId: "lokho1",
  storageBucket: "lokho1.firebasestorage.app",
  messagingSenderId: "922821586676",
  appId: "1:922821586676:web:1c14e1619033d7476eb8a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAatQp8mAsN4k83gUeljmUSKnCMGTTOxSM",
  authDomain: "mementotattooapi.firebaseapp.com",
  projectId: "mementotattooapi",
  storageBucket: "mementotattooapi.appspot.com",
  messagingSenderId: "930382358864",
  appId: "1:930382358864:web:b81f68219d8dfb414ee455",
  measurementId: "G-Y3WKD2ZQPT"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
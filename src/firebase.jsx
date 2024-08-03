// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgKQlq6tsENYd7sd4OHDvZ9QB8kv5w3hI",
  authDomain: "youtbe-e93d6.firebaseapp.com",
  projectId: "youtbe-e93d6",
  storageBucket: "youtbe-e93d6.appspot.com",
  messagingSenderId: "198818957978",
  appId: "1:198818957978:web:7a46fb5e373e11364c6d23",
  measurementId: "G-MNJ1J01PJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth}
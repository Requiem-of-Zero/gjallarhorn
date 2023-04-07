// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8vgxy-f97WrFZGq-EX5OK7gYZgg6vhEg",
  authDomain: "newtype-ocean.firebaseapp.com",
  projectId: "newtype-ocean",
  storageBucket: "newtype-ocean.appspot.com",
  messagingSenderId: "607790991122",
  appId: "1:607790991122:web:85f74efcd9e0a471b455cb",
  measurementId: "G-M6B6E4V17L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

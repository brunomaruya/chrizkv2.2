// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmJ83l-edggRetWYbZ4GAFT8FJwC3UlrA",
  authDomain: "chriztiankv2.firebaseapp.com",
  projectId: "chriztiankv2",
  storageBucket: "chriztiankv2.appspot.com",
  messagingSenderId: "658589884797",
  appId: "1:658589884797:web:018283472f616bd1d76c14",
  measurementId: "G-HDKCDXMT3B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();

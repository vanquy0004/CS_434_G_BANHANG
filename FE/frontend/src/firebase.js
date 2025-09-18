// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuLJzc2fM65aC5KG33fguetDxqhHX2eMU",
  authDomain: "lego-mark.firebaseapp.com",
  projectId: "lego-mark",
  storageBucket: "lego-mark.firebasestorage.app",
  messagingSenderId: "1050590027493",
  appId: "1:1050590027493:web:34de2c5f6038b6a1d07e0c",
  measurementId: "G-61T0VVT9XY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };

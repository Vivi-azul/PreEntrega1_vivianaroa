// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCSqr-2uevgZijndEf7afRVrH-wkbuJuUw",

  authDomain: "ecommercevii.firebaseapp.com",

  projectId: "ecommercevii",

  storageBucket: "ecommercevii.appspot.com",

  messagingSenderId: "220898529135",

  appId: "1:220898529135:web:61d87df335aa81bab6629a",

  measurementId: "G-20QBRTXPPR"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore()


export default db;

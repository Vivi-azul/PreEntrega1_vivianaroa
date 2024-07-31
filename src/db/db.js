import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

const db = getFirestore()


export default db;

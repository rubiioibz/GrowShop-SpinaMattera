import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxJFLi-Rd4ky4vaYl-5vYWtLzKQYl73Sg",
  authDomain: "beccar-growshop---spinamattera.firebaseapp.com",
  projectId: "beccar-growshop---spinamattera",
  storageBucket: "beccar-growshop---spinamattera.appspot.com",
  messagingSenderId: "566641145734",
  appId: "1:566641145734:web:b259b3a24f23a471821e07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

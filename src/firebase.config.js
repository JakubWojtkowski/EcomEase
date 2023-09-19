import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXZoOubhlchBJf6ripeLwtUSrjExwdCCA",
  authDomain: "ecomease-303e1.firebaseapp.com",
  projectId: "ecomease-303e1",
  storageBucket: "ecomease-303e1.appspot.com",
  messagingSenderId: "233328863121",
  appId: "1:233328863121:web:fb4a7b3b0c842acde05c30",
  measurementId: "G-W709168K5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

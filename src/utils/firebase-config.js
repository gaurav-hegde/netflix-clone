// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKwZAK7T0CzjmVUn4wUnE9PXI2Y9mIXEA",
  authDomain: "netflix-clone-16aa5.firebaseapp.com",
  projectId: "netflix-clone-16aa5",
  storageBucket: "netflix-clone-16aa5.appspot.com",
  messagingSenderId: "796993150270",
  appId: "1:796993150270:web:5e4bb31ad0e8b78212a06f",
  measurementId: "G-QV0T9GBWEL",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

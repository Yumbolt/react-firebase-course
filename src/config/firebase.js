import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0uK1JQBb2QyG58UjADJE1Dke_0HuKLA0",
  authDomain: "my-project-7d094.firebaseapp.com",
  projectId: "my-project-7d094",
  storageBucket: "my-project-7d094.appspot.com",
  messagingSenderId: "416503736125",
  appId: "1:416503736125:web:5e528a77731f8d3633c754",
  measurementId: "G-3FWBLWKHYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

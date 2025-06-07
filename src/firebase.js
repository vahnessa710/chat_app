// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Added GoogleAuthProvider
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUa5NV5ZXnvzYIA5JTtY9X3OqVNSc__B0",
  authDomain: "chat-app-react-f988e.firebaseapp.com",
  projectId: "chat-app-react-f988e",
  storageBucket: "chat-app-react-f988e.firebasestorage.app",
  messagingSenderId: "320258181499",
  appId: "1:320258181499:web:65bdeefb7f007e0a2795de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services to use in your app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
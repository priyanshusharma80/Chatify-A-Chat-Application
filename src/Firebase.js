import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9XXAI63D54l7xlbe2C_gK2LWyvsprAzc",
  authDomain: "final-chat-app-4a040.firebaseapp.com",
  projectId: "final-chat-app-4a040",
  storageBucket: "final-chat-app-4a040.appspot.com",
  messagingSenderId: "983903795061",
  appId: "1:983903795061:web:6e5afea67793c945fd453c"
};

// Initialize Firebase

export const app = !getApps().length && initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

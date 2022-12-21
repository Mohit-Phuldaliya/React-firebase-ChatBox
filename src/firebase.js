import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0P_QScY98euj2vsg1lznmnqGONHco1Lk",
  authDomain: "chat-c6b52.firebaseapp.com",
  projectId: "chat-c6b52",
  storageBucket: "chat-c6b52.appspot.com",
  messagingSenderId: "106229185383",
  appId: "1:106229185383:web:308310d0d7bda70abb4dc2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

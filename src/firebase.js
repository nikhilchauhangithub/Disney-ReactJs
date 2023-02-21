import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxcA-GtkyChq9FcO_U7mBfWsMrQ4WpsoY",
  authDomain: "disneyplus-cloned.firebaseapp.com",
  projectId: "disneyplus-cloned",
  storageBucket: "disneyplus-cloned.appspot.com",
  messagingSenderId: "823138137294",
  appId: "1:823138137294:web:8eaa555b89008ef4bc4c9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();



export {auth,provider};
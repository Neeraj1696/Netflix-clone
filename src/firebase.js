import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnq8pkZlgleWiF0jaYQ5hs025tKXZeTUE",
  authDomain: "netflix-clone-2-4cf2c.firebaseapp.com",
  projectId: "netflix-clone-2-4cf2c",
  storageBucket: "netflix-clone-2-4cf2c.appspot.com",
  messagingSenderId: "105426996103",
  appId: "1:105426996103:web:0d03ffa0a0739860446122",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app);

export { auth };

export default db;

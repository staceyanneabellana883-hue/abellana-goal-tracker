
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSXNJHePR2fY8EH6BApq_ZyjwosLrapNg",
  authDomain: "goalproject-sba.firebaseapp.com",
  projectId: "goalproject-sba",
  storageBucket: "goalproject-sba.firebasestorage.app",
  messagingSenderId: "1025293557213",
  appId: "1:1025293557213:web:23685a89d5436f2483aa34"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBHqUFx-GUXdCA8fvEMUT2qkZsWUcSYs4",
  authDomain: "lab6-javascript4-elliot.firebaseapp.com",
  projectId: "lab6-javascript4-elliot",
  storageBucket: "lab6-javascript4-elliot.appspot.com",
  messagingSenderId: "838634728791",
  appId: "1:838634728791:web:7673622486aebc4ae8a212",
  measurementId: "G-SFHKZTDBQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
export const db = getFirestore(app);

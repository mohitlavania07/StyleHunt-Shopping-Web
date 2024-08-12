import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpQJxulTT2Oj3j2DdGrR3nOkhisWVQVIA",
  authDomain: "stylehunt-e6b7d.firebaseapp.com",
  projectId: "stylehunt-e6b7d",
  storageBucket: "stylehunt-e6b7d.appspot.com",
  messagingSenderId: "1027776022212",
  appId: "1:1027776022212:web:ea04bead35ecaa050e6b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
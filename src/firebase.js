import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQRsfE-NMJerVu8VsCIT9kC2k7ukzYW7M",
  authDomain: "teamtrack-434f6.firebaseapp.com",
  projectId: "teamtrack-434f6",
  storageBucket: "teamtrack-434f6.appspot.com",
  messagingSenderId: "753168081294",
  appId: "1:753168081294:web:e8ae32be6d6ed54256c4df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
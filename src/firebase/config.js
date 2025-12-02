import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRFNBESSruYjHpCfflbJuQLFTac0S8mIU",
  authDomain: "meow-co-db.firebaseapp.com",
  projectId: "meow-co-db",
  storageBucket: "meow-co-db.firebasestorage.app",
  messagingSenderId: "575702910992",
  appId: "1:575702910992:web:bb0ec72aee0d5f50386295",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

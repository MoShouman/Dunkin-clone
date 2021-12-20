import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDYxlIg_Bpz64LFk3ZHVgZJtglgJLqJga8",
    authDomain: "tesla-clone-mi.firebaseapp.com",
    projectId: "tesla-clone-mi",
    storageBucket: "tesla-clone-mi.appspot.com",
    messagingSenderId: "244732549325",
    appId: "1:244732549325:web:5d0f78f0f0aa129c8c7184",
    measurementId: "G-GBGBBEPK7E"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

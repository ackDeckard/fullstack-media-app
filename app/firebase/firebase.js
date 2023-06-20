import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQfF4hjUSEEDPcsQh77U2PzDbgdb4bhPQ",
  authDomain: "recipe-app-3a2b8.firebaseapp.com",
  databaseURL: "https://recipe-app-3a2b8-default-rtdb.firebaseio.com",
  projectId: "recipe-app-3a2b8",
  storageBucket: "recipe-app-3a2b8.appspot.com",
  messagingSenderId: "641448283872",
  appId: "1:641448283872:web:891a8a3a2bdb4b16dd0a85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

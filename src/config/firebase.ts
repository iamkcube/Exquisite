import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCsz-NuM8CMD3MA6je-PFud3v_mJj2AGb0",
	authDomain: "exquisite-mine.firebaseapp.com",
	projectId: "exquisite-mine",
	storageBucket: "exquisite-mine.appspot.com",
	messagingSenderId: "659594634970",
	appId: "1:659594634970:web:18c5e9d254593216fb67e3",
	measurementId: "G-47CY5K0WCG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

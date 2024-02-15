import { auth, googleProvider } from "@/config/firebase";
import {
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";

export async function handleSignUp(email: string, password: string) {
	await createUserWithEmailAndPassword(auth, email, password);
	console.log("Signup successful");
}

export async function handleSignUpWithGoogle() {
	await signInWithPopup(auth, googleProvider);
	console.log("Signup successful");
}

export async function handleLogin(email: string, password: string) {
	await signInWithEmailAndPassword(auth, email, password);
	console.log("Login successful");
}

export async function handleSignOut() {
	await signOut(auth);
	console.log("Signout successful");
}

import { auth, googleProvider } from "@/config/firebase";
import { handleCreateUserInDB } from "@api/dbAPI";
import {
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";

export async function handleSignUp(
	name: string,
	email: string,
	password: string,
	photo: File | undefined
) {
	const obj = await createUserWithEmailAndPassword(auth, email, password);

	console.log("🚀 ~ handleSignUp ~ obj:", obj);
	console.log("Signup successful");

	await handleCreateUserInDB(name, email, photo);
}

export async function handleSignUpWithGoogle() {
	const obj2 = await signInWithPopup(auth, googleProvider);
	console.log("🚀 ~ handleSignUpWithGoogle ~ obj2:", obj2);
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

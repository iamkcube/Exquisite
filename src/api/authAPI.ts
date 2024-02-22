import { auth, googleProvider } from "@/config/firebase";
import { handleCreateUserInDB } from "@api/dbAPI";
import {
	signInWithEmailAndPassword,
	signOut,
	createUserWithEmailAndPassword,
	signInWithPopup,
	signInWithRedirect,
} from "firebase/auth";

export async function handleSignUp(
	name: string,
	email: string,
	password: string,
	photo: File | undefined
) {
	await createUserWithEmailAndPassword(auth, email, password);

	console.log("Signup successful");

	await handleCreateUserInDB(name, email, photo);
}

export async function handleSignUpWithGoogle() {
	console.log(
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
	);

	const googleSignInDetails =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)
			? await signInWithRedirect(auth, googleProvider)
			: await signInWithPopup(auth, googleProvider);
	const { displayName, email, photoURL } = googleSignInDetails.user;

	if (googleSignInDetails?._tokenResponse?.isNewUser) {
		if (displayName && email) {
			await handleCreateUserInDB(
				displayName,
				email,
				photoURL || undefined
			);
		} else {
			console.log("One or more required fields are null");
		}
	}

	console.log("Signup with google successful");
}

export async function handleLogin(email: string, password: string) {
	await signInWithEmailAndPassword(auth, email, password);
	console.log("Login successful");
}

export async function handleSignOut() {
	await signOut(auth);
	console.log("Signout successful");
}

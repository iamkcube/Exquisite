import { db } from "@/config/firebase";
import {
	setDoc,
	doc,
	updateDoc,
	serverTimestamp,
	arrayUnion,
} from "firebase/firestore";

export async function handleCreateUserInDB({
	email,
	name,
}: {
	email: string;
	name: string;
}) {
	await setDoc(doc(db, "users", email), {
		name,
		createdAt: serverTimestamp(),
		updatedAt: serverTimestamp(),
		userEvents: [],
	});
}

export async function handleAddUserEvent({
	email,
	userEventIds,
}: {
	email: string;
	userEventIds: string[];
}) {
	await updateDoc(doc(db, "users", email), {
		updatedAt: serverTimestamp(),
		userEvents: arrayUnion(...userEventIds),
	});
}

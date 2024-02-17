import { db, storage } from "@/config/firebase";
import {
	setDoc,
	doc,
	updateDoc,
	serverTimestamp,
	arrayUnion,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function handleCreateUserInDB(
	name: string,
	email: string,
	photo: File | undefined
) {
	let photoUrl =
		"https://source.unsplash.com/random/400x400/?profile,picture";
	if (photo) {
		photoUrl = await handleUpload(photo);
	}
	await setDoc(doc(db, "users", email), {
		name,
		createdAt: serverTimestamp(),
		updatedAt: serverTimestamp(),
		photoUrl,
		userEvents: [],
	});
}

const handleUpload = async (photo: File) => {
	const storageRef = ref(storage, "userPhotos/" + photo.name);

	try {
		const snapshot = await uploadBytes(storageRef, photo);
		console.log("🚀 ~ handleUpload ~ snapshot:", snapshot);
		console.log("Uploaded a blob or file!");
	} catch (error) {
		console.error("Error uploading file:", error);
	}

	const url = await getDownloadURL(storageRef);
	return url;
};

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

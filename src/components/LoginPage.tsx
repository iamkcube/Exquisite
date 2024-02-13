import { Box, TextField } from "@mui/material";
import RoundedButton from "@utils/RoundedButton";
import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

export default function LoginPage() {
	const emailRef = useRef<HTMLInputElement>();
	const passwordRef = useRef<HTMLInputElement>();

	async function handleSignUp() {
		console.log("🚀 ~ handleSignUp ~ email:", emailRef?.current?.value);
		console.log(
			"🚀 ~ handleSignUp ~ password:",
			passwordRef?.current?.value
		);
		const email = emailRef?.current?.value || "";
		const password = passwordRef?.current?.value || "";
		
		await createUserWithEmailAndPassword(auth, email, password);
		console.log("Signup successful");
		
	}

	return (
		<Box
			sx={{
				width: "min(100% - 3rem, 960px)",
				marginInline: "auto",
				display: "grid",
				placeContent: "center",
				gap: "1rem",
				minHeight: "100svh",
			}}
		>
			<TextField
				id="email"
				variant="filled"
				label="Enter Email"
				inputRef={emailRef}
			/>
			<TextField
				id="password"
				type="password"
				variant="filled"
				label="Enter Password"
				inputRef={passwordRef}
			/>
			<RoundedButton
				text="Sign Up"
				onClick={handleSignUp}
			/>
			<RoundedButton
				text="Sign Up with Google"
				onClick={() => null}
			/>
		</Box>
	);
}

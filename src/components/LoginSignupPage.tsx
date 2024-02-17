import { useAuth } from "@/contexts/AuthContext";
import { SnackbarContext } from "@/contexts/SnackbarContext";
import {
	handleLogin,
	handleSignOut,
	handleSignUp,
	handleSignUpWithGoogle,
} from "@api/authAPI";
import LoginPage from "@components/LoginSignupPage/LoginPage";
import OverlapStuff from "@components/LoginSignupPage/OverlapStuff";
import SignupPage from "@components/LoginSignupPage/SignupPage";
import StarburstDesignStuff from "@components/LoginSignupPage/StarburstDesignStuff";
import { Box, Button, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import RoundedButton from "@utils/RoundedButton";
import { useContext, useRef } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

export default function LoginSignupPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const { userLoggedIn } = useAuth();
	const { openSnackbar } = useContext(SnackbarContext);

	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const photoRef = useRef<HTMLInputElement>(null);

	const { mutate: mutateLogin, isPending: isLoadingLogin } = useMutation({
		mutationFn: () =>
			handleLogin(
				emailRef?.current?.value || "",
				passwordRef?.current?.value || ""
			),
		onSuccess: () => {
			navigate("../");
			openSnackbar("Login successful!");
		},
		onError(error) {
			if (
				error.message === "Firebase: Error (auth/invalid-credential)."
			) {
				openSnackbar("Invalid Email or Password.");
			}
		},
	});

	const { mutate: mutateSignUp, isPending: isLoadingSignUp } = useMutation({
		mutationFn: () =>
			handleSignUp(
				nameRef?.current?.value || "",
				emailRef?.current?.value || "",
				passwordRef?.current?.value || "",
				photoRef?.current?.files?.[0]
			),
		onSuccess: () => {
			navigate("../");
			openSnackbar("Sign Up successful!");
		},
		onError(error) {
			if (
				error.message === "Firebase: Error (auth/email-already-in-use)."
			) {
				openSnackbar("Already Signed Up. Try logging in.");
			}
		},
	});

	const {
		mutate: mutateSignUpWithGoogle,
		isPending: isLoadingSignUpWithGoogle,
	} = useMutation({
		mutationFn: () => handleSignUpWithGoogle(),
		onSuccess: () => {
			navigate("../");
			openSnackbar("Sign In with Google successful!");
		},
	});

	const { mutate: mutateSignOut, isPending: isLoadingSignOut } = useMutation({
		mutationFn: () => handleSignOut(),
		onSuccess: () => {
			openSnackbar("Logged Out.");
		},
	});

	return (
		<Box
			sx={{
				display: "grid",
				placeContent: "center",
				minHeight: "100svh",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<StarburstDesignStuff />

			<Stack
				justifyContent="space-between"
				direction="row"
			>
				<Box marginBlockStart="1.5em">
					<RoundedButton
						text="Back to Home"
						onClick={() => navigate("../")}
					/>
				</Box>
				{
					<Box marginBlockStart="1.5em">
						<Button
							sx={{
								textTransform: "none",
							}}
							onClick={() =>
								navigate(
									`../${
										location.pathname === "/login"
											? "signup"
											: "login"
									}`,
									{
										state: {
											email: emailRef?.current?.value,
											password:
												passwordRef?.current?.value,
										},
									}
								)
							}
						>
							{location.pathname === "/login"
								? "Sign Up Here"
								: "Login Here"}
						</Button>
					</Box>
				}
			</Stack>

			<Box
				sx={{
					display: "grid",
					alignItems: "center",
					gridTemplateRows: "1fr 10% 1fr",
					gridTemplateAreas: `"top"
										"gap"
										"bottom"`,
				}}
			>
				<OverlapStuff />
				<Routes>
					<Route
						path="/login"
						element={
							<LoginPage
								userLoggedIn={userLoggedIn}
								emailRef={emailRef}
								passwordRef={passwordRef}
								mutateLogin={mutateLogin}
								isLoadingLogin={isLoadingLogin}
								mutateSignUpWithGoogle={mutateSignUpWithGoogle}
								isLoadingSignUpWithGoogle={
									isLoadingSignUpWithGoogle
								}
								mutateSignOut={mutateSignOut}
								isLoadingSignOut={isLoadingSignOut}
							/>
						}
					/>
					<Route
						path="/signup"
						element={
							<SignupPage
								userLoggedIn={userLoggedIn}
								nameRef={nameRef}
								emailRef={emailRef}
								passwordRef={passwordRef}
								photoRef={photoRef}
								mutateSignUp={mutateSignUp}
								isLoadingSignUp={isLoadingSignUp}
								mutateSignUpWithGoogle={mutateSignUpWithGoogle}
								isLoadingSignUpWithGoogle={
									isLoadingSignUpWithGoogle
								}
								mutateSignOut={mutateSignOut}
								isLoadingSignOut={isLoadingSignOut}
							/>
						}
					/>
				</Routes>
			</Box>
		</Box>
	);
}

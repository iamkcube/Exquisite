import { useOtherContext } from "@/contexts/OtherContext";
import { Box, Stack, Typography, TextField } from "@mui/material";
import RoundedButton from "@utils/RoundedButton";
import Starburst from "@utils/Starburst";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LoginPageProps {
	userLoggedIn: boolean;
	emailRef: React.RefObject<HTMLInputElement>;
	passwordRef: React.RefObject<HTMLInputElement>;
	mutateLogin: () => void;
	isLoadingLogin: boolean;
	mutateSignUpWithGoogle: () => void;
	isLoadingSignUpWithGoogle: boolean;
	mutateSignOut: () => void;
	isLoadingSignOut: boolean;
}

export default function LoginPage({
	userLoggedIn,
	emailRef,
	passwordRef,
	mutateLogin,
	isLoadingLogin,
	mutateSignUpWithGoogle,
	isLoadingSignUpWithGoogle,
	mutateSignOut,
	isLoadingSignOut,
}: LoginPageProps) {
	const { isBigDevice } = useOtherContext();

	const { state } = useLocation();
	useEffect(() => {
		emailRef.current!.value = state?.email || "";
		passwordRef.current!.value = state?.password || "";
	}, []);

	return (
		<Box
			sx={{
				marginInline: isBigDevice ? "auto" : "2rem",
				width: isBigDevice ? "40ch" : "auto",
				display: "grid",
				placeItems: "center",
				gap: "1rem",
				gridArea: "top-start/ top-start / bottom-end / bottom-end",
			}}
		>
			<Stack
				direction="row"
				width="100%"
				alignItems="center"
				marginBlockEnd="0.5em"
				spacing={1}
			>
				<Typography
					fontFamily="var(--fancy-font)"
					fontSize="2rem"
					paddingInlineEnd={1}
				>
					Login
				</Typography>
				{[...Array(3)].map((_, index) => (
					<Starburst
						key={index}
						color="var(--accent-light-green)"
						width="2rem"
					/>
				))}
			</Stack>
			<TextField
				id="email"
				variant="outlined"
				label="Enter Email"
				inputRef={emailRef}
				fullWidth
				required
				InputProps={{
					style: {
						borderRadius: "100px",
					},
				}}
			/>
			<TextField
				id="password"
				type="password"
				variant="outlined"
				label="Enter Password"
				inputRef={passwordRef}
				fullWidth
				required
				InputProps={{
					style: {
						borderRadius: "100px",
					},
				}}
			/>
			<Stack
				direction="column"
				spacing={1}
			>
				<RoundedButton
					text="Login"
					// contained
					color="secondary"
					onClick={mutateLogin}
					isLoading={isLoadingLogin}
				/>
				<RoundedButton
					text="Sign In with Google"
					// contained
					color="secondary"
					onClick={mutateSignUpWithGoogle}
					isLoading={isLoadingSignUpWithGoogle}
				/>
				{userLoggedIn && (
					<RoundedButton
						text="Sign Out"
						// contained
						color="secondary"
						onClick={mutateSignOut}
						isLoading={isLoadingSignOut}
					/>
				)}
			</Stack>
		</Box>
	);
}

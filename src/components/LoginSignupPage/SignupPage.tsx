import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import RoundedButton from "@utils/RoundedButton";
import Starburst from "@utils/Starburst";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface SignupPageProps {
	userLoggedIn: boolean;
	nameRef: React.RefObject<HTMLInputElement>;
	emailRef: React.RefObject<HTMLInputElement>;
	passwordRef: React.RefObject<HTMLInputElement>;
	photoRef: React.RefObject<HTMLInputElement>;
	mutateSignUp: () => void;
	isLoadingSignUp: boolean;
	mutateSignUpWithGoogle: () => void;
	isLoadingSignUpWithGoogle: boolean;
	mutateSignOut: () => void;
	isLoadingSignOut: boolean;
}

export default function SignupPage({
	userLoggedIn,
	nameRef,
	emailRef,
	passwordRef,
	photoRef,
	mutateSignUp,
	isLoadingSignUp,
	mutateSignUpWithGoogle,
	isLoadingSignUpWithGoogle,
	mutateSignOut,
	isLoadingSignOut,
}: SignupPageProps) {
	const [avatarSrc, setAvatarSrc] = useState<string | ArrayBuffer | null>(
		"https://source.unsplash.com/random/400x400/?profile,picture"
	);
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			setAvatarSrc(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file);
		} else {
			setAvatarSrc(
				"https://source.unsplash.com/random/400x400/?profile,picture"
			);
		}
	};

	const { state } = useLocation();
	useEffect(() => {
		emailRef.current!.value = state?.email || "";
		passwordRef.current!.value = state?.password || "";
	}, []);

	return (
		<Box
			sx={{
				marginInline: "auto",
				width: "40ch",
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
					SignUp
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
				id="name"
				variant="outlined"
				label="Enter Name"
				inputRef={nameRef}
				fullWidth
				required
				InputProps={{
					style: {
						borderRadius: "100px",
					},
				}}
			/>
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
			<TextField
				id="photo"
				type="file"
				variant="outlined"
				label="Select Photo"
				inputRef={photoRef}
				onChange={handleFileChange}
				fullWidth
				required
				InputProps={{
					startAdornment: (
						<Avatar
							src={avatarSrc as string}
							sx={{
								marginInlineEnd: 1,
							}}
						></Avatar>
					),
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
					text="Sign Up"
					contained
					color="secondary"
					onClick={mutateSignUp}
					isLoading={isLoadingSignUp}
				/>
				<RoundedButton
					text="Sign In with Google"
					contained
					color="secondary"
					onClick={mutateSignUpWithGoogle}
					isLoading={isLoadingSignUpWithGoogle}
				/>
				{userLoggedIn && (
					<RoundedButton
						text="Sign Out"
						contained
						color="secondary"
						onClick={mutateSignOut}
						isLoading={isLoadingSignOut}
					/>
				)}
			</Stack>
		</Box>
	);
}

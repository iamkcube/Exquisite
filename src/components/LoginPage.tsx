import { base64 } from "@/assets/StarburstFloralBase64";
import { useAuth } from "@/contexts/AuthContext";
import {
	handleLogin,
	handleSignOut,
	handleSignUp,
	handleSignUpWithGoogle,
} from "@api/authAPI";
import { Box, Stack, TextField, Typography, keyframes } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import RoundedButton from "@utils/RoundedButton";
import Starburst from "@utils/Starburst";
import StarburstFloral from "@utils/StarburstFloral";
import StarburstLines from "@utils/StarburstLines";
import StarburstOutline from "@utils/StarburstOutline";
import StarburstPolygon from "@utils/StarburstPolygon";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
	const navigate = useNavigate();
	const { userLoggedIn } = useAuth();

	const emailRef = useRef<HTMLInputElement>();
	const passwordRef = useRef<HTMLInputElement>();

	const { mutate: mutateLogin, isPending: isLoadingLogin } = useMutation({
		mutationFn: () =>
			handleLogin(
				emailRef?.current?.value || "",
				passwordRef?.current?.value || ""
			),
		onSuccess: () => navigate("../"),
	});

	const { mutate: mutateSignUp, isPending: isLoadingSignUp } = useMutation({
		mutationFn: () =>
			handleSignUp(
				emailRef?.current?.value || "",
				passwordRef?.current?.value || ""
			),
		onSuccess: () => navigate("../"),
		onError(error) {
			if (
				error.message === "Firebase: Error (auth/email-already-in-use)."
			) {
				mutateLogin();
			}
		},
	});

	const {
		mutate: mutateSignUpWithGoogle,
		isPending: isLoadingSignUpWithGoogle,
	} = useMutation({
		mutationFn: () => handleSignUpWithGoogle(),
		onSuccess: () => navigate("../"),
	});

	const { mutate: mutateSignOut, isPending: isLoadingSignOut } = useMutation({
		mutationFn: () => handleSignOut(),
	});

	return (
		<Box
			sx={{
				display: "grid",
				placeContent: "center",
				minHeight: "100svh",
				position:"relative",
				overflow: "hidden",
			}}
		>
			<StarburstPolygon
				color={"var(--accent-light-green)"}
				width={"12.5rem"}
				style={{
					position: "absolute",
					top: 0,
					right: 300,
					opacity: 0.25,
				}}
			/>
			<StarburstOutline
				color={"var(--accent-light-green)"}
				width={"10rem"}
				style={{
					position: "absolute",
					bottom: 100,
					left: 300,
					opacity: 0.25,
				}}
			/>
			<StarburstLines
				color={"var(--accent-main-purple)"}
				width={"10rem"}
				style={{
					position: "absolute",
					bottom: 100,
					left: 300,
					opacity: 0.25,
				}}
			/>
			<StarburstFloral
				color={"var(--accent-main-purple)"}
				width={"40rem"}
				style={{
					position: "absolute",
					bottom: -200,
					right: -300,
					opacity: 0.1,
				}}
			/>
			<StarburstLines
				color={"var(--accent-main-purple)"}
				width={"20rem"}
				style={{
					position: "absolute",
					top: -50,
					left: 20,
					opacity: 0.1,
				}}
			/>
			<Box marginBlockStart="1.5em">
				<RoundedButton
					text="Back to Home"
					onClick={() => navigate("../")}
				/>
			</Box>
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
				<Box
					sx={{
						width: "80vw",
						height: "min(40vh,250px)",
						backgroundColor: "var(--accent-white)",
						opacity: 0.25,
						zIndex: -2,
						gridArea: "top",
					}}
				></Box>
				<Box
					sx={{
						width: "80vw",
						height: "min(40vh,250px)",
						backgroundColor: "var(--accent-blue)",
						opacity: 0.25,
						zIndex: -2,
						gridArea: "bottom",
					}}
				></Box>
				<Box
					sx={{
						marginInline: "auto",
						width: "40rem",
						mask: `url(${base64}) no-repeat center / contain`,
						WebkitMask: `url(${base64}) no-repeat center / contain`,
						gridArea:
							"top-start/ top-start / bottom-end / bottom-end",
						zIndex: -1,
					}}
				>
					<Box
						className="gradient-hover"
						sx={{
							width: "100%",
							aspectRatio: 1,
							backgroundImage:
								"linear-gradient(to right, #00000054,#00000054), var(--noise-layer), var(--radial-gradient-blue)",
							backgroundSize: "500%",
							backgroundPosition: "0% 0%",
							backgroundRepeat: "repeat",
							animation: `${backgroundMove} 120s ease-in-out infinite alternate`,
						}}
					></Box>
				</Box>
				<Box
					sx={{
						marginInline: "auto",
						width: "40ch",
						display: "grid",
						placeItems: "center",
						gap: "1rem",
						gridArea:
							"top-start/ top-start / bottom-end / bottom-end",
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
							Login/SignUp
						</Typography>
						<Starburst
							color="var(--accent-light-green)"
							width="2rem"
						/>
						<Starburst
							color="var(--accent-light-green)"
							width="2rem"
						/>
						<Starburst
							color="var(--accent-light-green)"
							width="2rem"
						/>
					</Stack>
					<TextField
						id="email"
						variant="outlined"
						label="Enter Email"
						inputRef={emailRef}
						fullWidth
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
							text="Login/Sign Up"
							contained
							color="secondary"
							onClick={mutateSignUp}
							isLoading={isLoadingSignUp || isLoadingLogin}
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
			</Box>
		</Box>
	);
}

const backgroundMove = keyframes`
		from {
			background-size:500%;
			background-position:0% 0%;
		}
		to{
			background-size:200%;
			background-position:100% 100%;
		}
`;

import { db } from "@/config/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { SnackbarContext } from "@/contexts/SnackbarContext";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import RoundedButton from "@utils/RoundedButton";
import Starburst from "@utils/Starburst";
import StarburstLines from "@utils/StarburstLines";
import StarburstOutline from "@utils/StarburstOutline";
import { updateDoc, doc, arrayRemove, arrayUnion } from "firebase/firestore";
import { useContext, useState, useEffect } from "react";

interface EventCardAwesomeProps {
	dark?: boolean;
	eventId: string;
	eventName: string;
	location: string;
	date: string;
	description: string;
}

export default function EventCardAwesome({
	dark = false,
	eventId,
	eventName,
	location,
	date,
	description,
}: EventCardAwesomeProps) {
	const queryClient = useQueryClient();
	const { userDoc } = useAuth();
	const { openSnackbar } = useContext(SnackbarContext);
	const [loadingTillUserDocFetches, setLoadingTillUserDocFetches] =
		useState(false);

	const {
		mutate: mutateRegisterForEvent,
		isPending: isLoadingRegisterForEvent,
	} = useMutation({
		mutationFn: async (isRegistered: boolean) => {
			if (userDoc && userDoc?.email) {
				await updateDoc(doc(db, "users", userDoc.email), {
					userEvents: isRegistered
						? arrayRemove(eventId)
						: arrayUnion(eventId),
				});

				setLoadingTillUserDocFetches(true);

				queryClient.invalidateQueries({ queryKey: ["eventsList"] });
				queryClient.invalidateQueries({ queryKey: ["userDoc"] });

				openSnackbar(
					`You have successfully ${
						isRegistered ? "deregistered" : "registered"
					} for ${eventName}`
				);
			} else {
				openSnackbar(`Sign Up first!`);
				console.log(userDoc);
			}
		},
	});
	useEffect(() => {
		setLoadingTillUserDocFetches(false);
	}, [userDoc]);

	return (
		<Card
			elevation={0}
			sx={{
				position: "relative",
				backgroundImage: `var(--noise-layer),
			radial-gradient(ellipse at 80% 60%,
				var(--accent-white),
				var(--accent-main-purple),
				var(--accent-white))`,
				borderRadius: 0,
				color: dark ? "var(--accent-white)" : "var(--text-color-dark)",
				"&::before": {
					content: `''`,
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					backgroundImage: `var(--noise-layer),
					radial-gradient(ellipse at 80% 60%,
						var(--accent-blue),
						var(--accent-main-purple),
						var(--accent-blue))`,
					zIndex: 1,
					transition: "opacity 0.5s linear",
					opacity: dark ? 1 : 0,
				},
				"&::after": {
					content: '""',
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					backgroundImage: `linear-gradient(to top, var(${
						dark ? "--accent-black-for-gradient" : "--accent-white"
					}), transparent)`,
					height: "50%",
					zIndex: 2,
				},
				transition: "color 0.5s ease-in",
			}}
		>
			<Stack
				sx={{
					position: "relative",
					display: "grid",
					gridTemplateColumns: "auto auto 1fr",
					padding: "3em 3em 1em 3em",
					columnGap: "2.5rem",
					zIndex: 100,
				}}
			>
				<Box
					sx={{
						display: "grid",
						gridTemplateAreas: "centre",
					}}
				>
					<StarburstOutline
						color="var(--accent-light-green)"
						width="8rem"
						style={{ gridArea: "center" }}
					/>
					<StarburstLines
						color="var(--accent-main-purple)"
						width="8rem"
						style={{ gridArea: "center" }}
					/>
				</Box>
				<Stack
					justifyContent="space-between"
					alignItems="flex-start"
					spacing={4}
				>
					<Box>
						<Typography
							fontFamily="var(--fancy-font)"
							fontSize="2rem"
						>
							{eventName}
						</Typography>
						<Stack
							direction="row"
							spacing={1.5}
						>
							<Typography>{date}</Typography>
							<Starburst
								color="var(--accent-light-green)"
								width="1rem"
							/>
							<Typography>{location}</Typography>
						</Stack>
					</Box>
					<RoundedButton
						text={
							(userDoc?.userEvents ?? []).includes(eventId)
								? "Deregister"
								: "Register"
						}
						color="secondary"
						isLoading={
							isLoadingRegisterForEvent ||
							loadingTillUserDocFetches
						}
						onClick={() =>
							mutateRegisterForEvent(
								(userDoc?.userEvents ?? []).includes(eventId)
							)
						}
						sx={{
							color: dark
								? "var(--accent-white)"
								: "var(--text-color-dark)",
							paddingBlock: "0.5rem",
						}}
					/>
				</Stack>
			</Stack>
			<CardContent
				sx={{
					position: "relative",
					zIndex: 100,
					opacity: 1,
					paddingInline: "3em",
				}}
			>
				<Typography
					maxWidth="60ch"
					fontSize="var(--mini-font-size)"
				>
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
}

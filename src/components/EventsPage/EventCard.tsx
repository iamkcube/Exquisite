import { db } from "@/config/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { SnackbarContext } from "@/contexts/SnackbarContext";
import { LoadingButton } from "@mui/lab";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

interface EventCardProps {
	eventId: string;
	heading: string;
	subheading: string;
	date: string;
	info: string;
}

export default function EventCard({
	eventId,
	heading,
	subheading,
	date,
	info,
}: EventCardProps) {
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
					} for ${heading}`
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
			sx={{
				backgroundImage:
					"var(--gradient-overlay-black),var(--noise-layer),var(--linear-gradient)",
				backgroundSize: "400%",
			}}
		>
			<CardMedia
				sx={{ height: "250px" }}
				image={`https://source.unsplash.com/random/1920x1080/?${heading.replace(
					" ",
					","
				)}`}
				title={heading}
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					component="div"
				>
					{heading} <br />
					{date}
				</Typography>
				<Typography
					variant="h6"
					color="text.secondary"
				>
					{subheading}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
				>
					{info}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					marginBlockStart: "auto",
					backgroundColor: "var(--body-color)",
				}}
			>
				<LoadingButton
					loading={
						isLoadingRegisterForEvent || loadingTillUserDocFetches
					}
					onClick={() =>
						mutateRegisterForEvent(
							(userDoc?.userEvents ?? []).includes(eventId)
						)
					}
				>
					{(userDoc?.userEvents ?? []).includes(eventId)
						? "Deregister"
						: "Register"}
				</LoadingButton>
				<Button>Learn More</Button>
			</CardActions>
		</Card>
	);
}

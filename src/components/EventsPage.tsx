import { useAuth } from "@/contexts/AuthContext";
import { useOtherContext } from "@/contexts/OtherContext";
import { handleGetAllEvents } from "@api/dbAPI";
import EventCardAwesome from "@components/EventsPage/EventCardAwesome";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import SectionDivider from "@utils/SectionDivider";
import { Link, useNavigate } from "react-router-dom";

export default function EventsPage() {
	const { isBigDevice } = useOtherContext();

	const navigate = useNavigate();
	const { userLoggedIn, userDoc, currentUser } = useAuth();

	const {
		data: eventsList,
		// isLoading,
		// isError,
	} = useQuery({
		queryFn: async () => await handleGetAllEvents(),
		queryKey: ["eventsList"],
	});

	const fancyFontStyles = {
		fontFamily: "var(--fancy-font)",
		fontSize: "clamp(2.5rem, 3vw + 1rem, 4rem)",
		paddingInline: isBigDevice ? "0.25rem" : "0.2rem",
		backgroundImage: `var(--noise-layer), 
						  var(--radial-gradient)`,
		backgroundSize: "125%",
		backgroundPosition: "90% calc(50% + 50px)",
		backgroundClip: "text",
		color: "transparent",
	};

	return (
		<Box
			width={
				isBigDevice ? "min(100% - 4rem, 1400px)" : "calc(100% - 2rem)"
			}
			marginInline={isBigDevice ? "auto" : "auto"}
			marginBlock="4rem"
		>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "1fr auto 1fr",
					justifyContent: "center",
				}}
			>
				<IconButton
					onClick={() => navigate("../")}
					sx={{
						justifySelf: "start",
						alignSelf: "center",
					}}
				>
					<ArrowBackIcon />
				</IconButton>
				<Typography
					fontFamily="var(--fancy-font)"
					textAlign="center"
					style={fancyFontStyles}
				>
					All Events
				</Typography>
				{userLoggedIn && (
					<Link
						to="../login"
						style={{
							alignSelf: "center",
							justifySelf: "end",
						}}
					>
						<Avatar
							src={
								userDoc?.photoUrl ||
								currentUser?.photoURL ||
								"https://www.unsplash.it/100/100"
							}
						></Avatar>
					</Link>
				)}
			</Box>
			<SectionDivider height={isBigDevice ? 40 : 10} />
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: isBigDevice
						? "repeat(auto-fit, minmax( 600px, 1fr ))"
						: "1fr",
					gap: "1rem",
					marginBlockStart: "1.69rem",
					"& > *": {
						display: "flex",
						flexDirection: "column",
					},
				}}
			>
				{eventsList
					?.sort((a, b) => a.date.seconds - b.date.seconds)
					?.map((event, index) => {
						return (
							<EventCardAwesome
								// dark={!!(index % 2)}
								dark={(userDoc?.userEvents ?? []).includes(
									event.id
								)}
								key={index}
								eventId={event.id}
								eventName={event.eventName}
								location={event.location}
								date={new Date(
									event.date.seconds * 1000
								).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
								description={event.description}
							/>
						);
					})}{" "}
			</Box>
		</Box>
	);
}

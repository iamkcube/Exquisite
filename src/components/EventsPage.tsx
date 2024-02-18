import { useAuth } from "@/contexts/AuthContext";
import { handleGetAllEvents } from "@api/dbAPI";
import EventCard from "@components/EventsPage/EventCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import SectionDivider from "@utils/SectionDivider";
import { Link, useNavigate } from "react-router-dom";

export default function EventsPage() {
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

	return (
		<Box
			width="min(100% - 4rem, 1400px)"
			marginInline="auto"
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
					<Link to="../login">
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
			<SectionDivider height={40} />
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax( 300px,1fr))",
					// placeContent: "center",
					gap: "1rem",
					// justifyContent: "center",
					// alignItems: "stretch",
					marginBlockStart: "1.69rem",
					"& > *": {
						display: "flex",
						flexDirection: "column",
						// justifyContent: "space-between",
						// minHeight: "100%",
					},
				}}
			>
				{eventsList
					?.sort((a, b) => a.date.seconds - b.date.seconds)
					?.map((event, index) => {
						return (
							<EventCard
								key={index}
								eventId={event.id}
								heading={event.eventName}
								subheading={event.location}
								date={new Date(
									event.date.seconds * 1000
								).toLocaleDateString("en-US", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
								info={event.description}
							/>
						);
					})}{" "}
			</Box>
		</Box>
	);
}

const fancyFontStyles = {
	fontFamily: "var(--fancy-font)",
	fontSize: "4rem",
	backgroundImage: `var(--noise-layer), 
	var(--radial-gradient)`,
	backgroundSize: "125%",
	backgroundPosition: "90% calc(50% + 50px)",
	backgroundClip: "text",
	color: "transparent",
};

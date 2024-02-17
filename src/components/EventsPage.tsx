import { EventsList } from "@/assets/EventsList";
import EventCard from "@components/EventsPage/EventCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, IconButton, Typography } from "@mui/material";
import SectionDivider from "@utils/SectionDivider";
import { useNavigate } from "react-router-dom";

export default function EventsPage() {
	const navigate = useNavigate();

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
				<></>
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
				{EventsList.map((event, index) => {
					return (
						<EventCard
							key={index}
							heading={event.eventName}
							subheading={event.location}
							date={event.date}
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

import { EventsList } from "@/assets/EventsList";
import EventCard from "@components/EventsPage/EventCard";
import SectionDivider from "@utils/SectionDivider";
import { Box, Typography } from "@mui/material";

export default function EventsPage() {
	return (
		<Box
			width="min(100% - 4rem, 1400px)"
			marginInline="auto"
			marginBlock="4rem"
		>
			<Typography
				fontFamily="var(--fancy-font)"
				textAlign="center"
				style={fancyFontStyles}
			>
				All Events
			</Typography>
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

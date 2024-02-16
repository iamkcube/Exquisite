import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@mui/material";

interface EventCardProps {
	heading: string;
	subheading: string;
	date: string;
	info: string;
}

export default function EventCard({
	heading,
	subheading,
	date,
	info,
}: EventCardProps) {
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
				<Button size="small">Register</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}
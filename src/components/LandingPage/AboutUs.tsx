import { Box, Divider, Stack, Typography } from "@mui/material";
import Starburst from "@utils/Starburst";

export default function AboutUs() {
	return (
		<Box
			id="AboutUs"
			sx={{
				display: "grid",
				gridTemplateColumns: "auto 1fr",
				gridTemplateRows: "auto auto 1fr",
				columnGap: "4rem",
				rowGap: "1rem",
			}}
		>
			<Stack>
				<Typography>About Us</Typography>
				<Divider
					sx={{
						marginBlockStart: "0.5em",
						bgcolor: "var(--accent-cyan)",
						height: "2px",
					}}
				/>
			</Stack>
			<Box></Box>
			<Box></Box>
			<Stack
				direction="row"
				spacing={1}
			>
				{[1, 2, 3, 4, 5].map(() => (
					<Starburst
						color="var(--accent-light-green)"
						width="1.75rem"
					/>
				))}
			</Stack>
			<Typography
				fontFamily="var(--fancy-font)"
				fontSize="1.75rem"
			>
				Provide Live Indie <br />
				2012 - Now
			</Typography>
			<Typography fontSize="var(--mini-font-size)">
				In 2012, the annual indie-fest was a huge success, featuring a
				lineup of rising stars, headliners unleashed, and an eclectic
				ensemble of artists.
				<br /> <br /> The festival showcased fresh faces in the indie
				music scene, as well as genre-benders who pushed the boundaries
				of traditional music genres.
			</Typography>
		</Box>
	);
}

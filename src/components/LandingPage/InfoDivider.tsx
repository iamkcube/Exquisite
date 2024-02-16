import { Box, Stack, Typography } from "@mui/material";
import StarburstLines from "@utils/StarburstLines";
import StarburstPolygon from "@utils/StarburstPolygon";

export default function InfoDivider() {
	return (
		<Stack
			direction="row"
			spacing={2}
			justifyContent="center"
			sx={{
				width: "90vw",
				marginLeft: "50%",
				transform: "translateX(-50%)",
			}}
		>
			<StarburstLines
				color="var(--accent-blue)"
				width={shapeWidth}
			/>

			<Box sx={overlapStyles}>
				<StarburstPolygon
					color="var(--accent-main-purple)"
					width={shapeWidth}
					style={{
						gridArea: "center",
					}}
				/>
				<Typography
					gridArea="center"
					textAlign="center"
				>
					3 days
				</Typography>
			</Box>

			<StarburstLines
				color="var(--accent-blue)"
				width={shapeWidth}
			/>

			<Box sx={overlapStyles}>
				<StarburstPolygon
					color="var(--accent-main-purple)"
					width={shapeWidth}
					style={{
						gridArea: "center",
					}}
				/>
				<Typography
					gridArea="center"
					textAlign="center"
				>
					chill
					<br /> & inspiring
					<br /> vibes
				</Typography>
			</Box>

			<StarburstLines
				color="var(--accent-blue)"
				width={shapeWidth}
			/>

			<Box sx={overlapStyles}>
				<StarburstPolygon
					color="var(--accent-main-purple)"
					width={shapeWidth}
					style={{
						gridArea: "center",
					}}
				/>
				<Typography
					gridArea="center"
					textAlign="center"
				>
					top <br /> bands
				</Typography>
			</Box>

			<StarburstLines
				color="var(--accent-blue)"
				width={shapeWidth}
			/>
		</Stack>
	);
}

const shapeWidth = "12rem";
const overlapStyles: React.CSSProperties = {
	display: "grid",
	gridTemplateAreas: "center",
	placeItems: "center",
};

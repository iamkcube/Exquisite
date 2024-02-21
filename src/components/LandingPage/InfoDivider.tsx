import { useOtherContext } from "@/contexts/OtherContext";
import { Box, Stack, Typography } from "@mui/material";
import StarburstLines from "@utils/StarburstLines";
import StarburstPolygon from "@utils/StarburstPolygon";

export default function InfoDivider() {
	const { isBigDevice } = useOtherContext();

	const shapeWidth = isBigDevice ? "12rem" : "6rem";

	return (
		<Stack
			sx={{
				width: "90vw",
				flexDirection: "row",
				justifyContent: "center",
				flexWrap: isBigDevice ? "nowrap" : "wrap",
				marginLeft: "50%",
				gap: isBigDevice ? 2 : 1,
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
					fontSize={isBigDevice ? "auto" : "0.6rem"}
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
					fontSize={isBigDevice ? "auto" : "0.6rem"}
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
					fontSize={isBigDevice ? "auto" : "0.6rem"}
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

const overlapStyles: React.CSSProperties = {
	display: "grid",
	gridTemplateAreas: "center",
	placeItems: "center",
};

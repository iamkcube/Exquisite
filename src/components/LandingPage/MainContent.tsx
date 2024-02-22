import { useOtherContext } from "@/contexts/OtherContext";
import { Box, Divider, Stack, Typography } from "@mui/material";
import StarburstFloral from "@utils/StarburstFloral";
import StarburstLines from "@utils/StarburstLines";
import StarburstOutline from "@utils/StarburstOutline";

export default function MainContent() {
	const { isBigDevice, isSmallDevice } = useOtherContext();

	const fancyFontStyles: React.CSSProperties = {
		fontFamily: "var(--fancy-font)",
		fontSize: "clamp(4.5rem, 20vw, 9rem)",
		paddingInline: isBigDevice ? "0.7rem" : "0.3rem",
		backgroundImage: `var(--noise-layer), 
		var(--radial-gradient)`,
		backgroundRepeat: "repeat",
		backgroundSize: "200%",
		backgroundPosition: "90% calc(50% + 50px)",
		backgroundClip: "text",
		color: "transparent",
		zIndex: 1,
	};

	return (
		<>
			<Stack
				direction="column"
				spacing="clamp(-4rem, -5vw, -1rem)"
				marginBlock={isBigDevice ? 0 : "10em 6em"}
				position="relative"
			>
				{/* 1st --------------------------------------------------------------------------------- */}
				<Stack
					direction="row"
					spacing={4}
					justifyContent="flex-end"
					alignItems="center"
				>
					<Box
						sx={{
							display: "grid",
							gridTemplateAreas: `"center"`,
							placeItems: "center",
							...(isSmallDevice && {
								position: "absolute",
								top: "-5rem",
								left: "-1rem",
							}),
						}}
					>
						<StarburstFloral
							width={isBigDevice ? "8rem" : "5rem"}
							color="var(--accent-main-purple)"
							style={{
								gridArea: "center",
							}}
						/>
						<Typography
							fontSize="var(--mini-font-size)"
							sx={{
								gridArea: "center",
								textAlign: "center",
							}}
						>
							10th-12th <br /> March '24
						</Typography>
					</Box>
					<Typography sx={fancyFontStyles}>Exquisite</Typography>
					<Stack
						direction="column"
						spacing={1}
						sx={{
							...(isSmallDevice && {
								position: "absolute",
								top: "-7rem",
								right: 0,
								textAlign: "right",
							}),
						}}
					>
						<Typography fontSize="var(--mini-font-size)">
							Douglass (Anna & <br />
							Frederick) Park
						</Typography>
						<Divider
							flexItem
							sx={dividerStyles}
						/>
						<Typography fontSize="var(--mini-font-size)">
							Chicago
						</Typography>
					</Stack>
				</Stack>

				{/* 2nd --------------------------------------------------------------------------------- */}
				<Stack
					direction="row"
					spacing={isBigDevice ? 4 : 3}
					justifyContent="flex-start"
					alignItems="center"
				>
					<Typography sx={fancyFontStyles}>Music</Typography>
					<StarburstOutline
						color={"var(--accent-green)"}
						width={"6rem"}
					/>
					<Typography fontSize="var(--mini-font-size)">
						music festival
					</Typography>
				</Stack>

				{/* 3rd --------------------------------------------------------------------------------- */}
				<Stack
					direction="row"
					spacing={4}
					justifyContent="flex-end"
					alignItems="center"
				>
					<Stack
						direction="column"
						spacing={1}
						sx={{
							textAlign: isBigDevice ? "right" : "left",
							...(isSmallDevice && {
								position: "absolute",
								bottom: "-6rem",
								left: 0,
							}),
						}}
					>
						<Typography fontSize="var(--mini-font-size)">
							Douglass (Anna & <br />
							Frederick) Park
						</Typography>
						<Divider
							flexItem
							sx={dividerStyles}
						/>
						<Typography fontSize="var(--mini-font-size)">
							Chicago
						</Typography>
					</Stack>
					<Typography sx={fancyFontStyles}>Festival</Typography>
					<StarburstLines
						width={isBigDevice ? "8rem" : "5rem"}
						color="var(--accent-main-purple)"
						style={{
							position: "absolute",
							bottom: "-4.5rem",
							right: "-1rem",
						}}
					/>
				</Stack>
			</Stack>
		</>
	);
}

const dividerStyles: React.CSSProperties = {
	height: 4,
	backgroundImage: "var(--noise-layer), var(--radial-gradient)",
	backgroundSize: "1000%",
};

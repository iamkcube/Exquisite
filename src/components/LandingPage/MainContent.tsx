import { Box, Divider, Stack, Typography } from "@mui/material";
import StarburstFloral from "@utils/StarburstFloral";
import StarburstLines from "@utils/StarburstLines";
import StarburstOutline from "@utils/StarburstOutline";

export default function MainContent() {
	return (
		<>
			<Stack
				direction="column"
				spacing={-8}
			>
				{/* 1st */}
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
						}}
					>
						<StarburstFloral
							width="8rem"
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
					<Typography sx={fancyFontStyles}>Excuisite</Typography>
					<Stack
						direction="column"
						spacing={1}
					>
						<Typography fontSize="var(--mini-font-size)">
							Douglass (Anna & <br />
							Frederick) Park
						</Typography>
						<Divider
							flexItem
							sx={dividerStyles}
						/>
						<Typography fontSize="var(--mini-font-size)">Chicago</Typography>
					</Stack>
				</Stack>

				{/* 2nd */}
				<Stack
					direction="row"
					spacing={4}
					justifyContent="flex-start"
					alignItems="center"
				>
					<Typography sx={fancyFontStyles}>Music</Typography>
					<StarburstOutline
						color={"var(--accent-green)"}
						width={"6rem"}
					/>
					<Stack
						direction="column"
						spacing={1}
					>
						<Typography fontSize="var(--mini-font-size)">
							music festival
						</Typography>
					</Stack>
				</Stack>

				{/* 3rd */}
				<Stack
					direction="row"
					spacing={4}
					justifyContent="flex-end"
					alignItems="center"
				>
					<Stack
						direction="column"
						spacing={1}
					>
						<Typography
							fontSize="var(--mini-font-size)"
							align="right"
						>
							Douglass (Anna & <br />
							Frederick) Park
						</Typography>
						<Divider
							flexItem
							sx={dividerStyles}
						/>
						<Typography
							fontSize="var(--mini-font-size)"
							align="right"
						>
							Chicago
						</Typography>
					</Stack>
					<Typography sx={fancyFontStyles}>Festival</Typography>
					<StarburstLines
						width="8rem"
						color="var(--accent-main-purple)"
					/>
				</Stack>
			</Stack>
		</>
	);
}

const fancyFontStyles = {
	fontFamily: "var(--fancy-font)",
	fontSize: "9rem",
	backgroundImage: `var(--noise-layer), 
	var(--radial-gradient)`,
	backgroundSize: "200%",
	backgroundPosition: "90% calc(50% + 50px)",
	backgroundClip: "text",
	color: "transparent",
};

const dividerStyles = {
	height: 4,
	backgroundImage: "var(--noise-layer), var(--radial-gradient)",
	backgroundSize: "1000%",
};

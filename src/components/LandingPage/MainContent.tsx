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
							gridTemplateRows: "1fr",
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
							fontSize="0.85rem"
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
						<Typography fontSize="0.85rem">
							Douglass (Anna & <br />
							Frederick) Park
						</Typography>
						<Divider
							flexItem
							sx={dividerStyles}
						/>
						<Typography fontSize="0.85rem">Chicago</Typography>
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
						<Typography fontSize="0.85rem">
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
							fontSize="0.85rem"
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
							fontSize="0.85rem"
							align="right"
						>
							Chicago
						</Typography>
					</Stack>
					<Typography sx={fancyFontStyles}>Festival</Typography>
					<StarburstLines width="8rem" color="var(--accent-main-purple)" />
				</Stack>
			</Stack>
		</>
	);
}

const fancyFontStyles = {
	fontFamily: "var(--fancy-font)",
	fontSize: "9rem",
	backgroundImage: "var(--radial-gradient)",
	backgroundSize: "200%",
	backgroundPosition: "90% calc(50% + 50px)",
	backgroundClip: "text",
	color: "transparent",
};

const dividerStyles = {
	height: 4,
	background: "var(--radial-gradient)",
	backgroundSize: "1000%",
};

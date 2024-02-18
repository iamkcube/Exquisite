import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import RoundedButton from "@utils/RoundedButton";
import Starburst from "@utils/Starburst";
import StarburstLines from "@utils/StarburstLines";
import StarburstOutline from "@utils/StarburstOutline";

export default function EventCardAwesome() {
	return (
		<Card
			sx={{
				position: "relative",
				backgroundImage: `var(--noise-layer),
			radial-gradient(ellipse at 80% 60%,
				var(--accent-white),
				var(--accent-main-purple),
				var(--accent-white))`,
				borderRadius: 0,
				color: "var(--text-color-dark)",
				"&::after": {
					content: '""',
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					backgroundImage:
						"linear-gradient(to top, var(--accent-white), transparent)",
					height: "50%",
				},
			}}
		>
			<Stack
				sx={{
					position: "relative",
					display: "grid",
					gridTemplateColumns: "auto auto 1fr",
					padding: "3em 3em 1em 3em",
					columnGap: "2.5rem",
					zIndex: 100,
				}}
			>
				<Box
					sx={{
						display: "grid",
						gridTemplateAreas: "centre",
					}}
				>
					<StarburstOutline
						color="var(--accent-light-green)"
						width="8rem"
						style={{ gridArea: "center" }}
					/>
					<StarburstLines
						color="var(--accent-main-purple)"
						width="8rem"
						style={{ gridArea: "center" }}
					/>
				</Box>
				<Stack
					justifyContent="space-between"
					alignItems="flex-start"
					spacing={4}
				>
					<Box>
						<Typography
							fontFamily="var(--fancy-font)"
							fontSize="2rem"
						>
							Battle Of Bands
						</Typography>
						<Stack
							direction="row"
							spacing={1.5}
						>
							<Typography>April 19, '24</Typography>
							<Starburst
								color="var(--accent-light-green)"
								width="1rem"
							/>
							<Typography>Main Stage</Typography>
						</Stack>
					</Box>
					<RoundedButton
						text="Register"
						color="secondary"
						onClick={function (): void {
							throw new Error("Function not implemented.");
						}}
						sx={{
							color: "var(--text-color-dark)",
							paddingBlock: "0.5rem",
						}}
					/>
				</Stack>
			</Stack>
			<CardContent
				sx={{
					position: "relative",
					zIndex: 100,
				}}
			>
				<Typography
					maxWidth="60ch"
					fontSize="var(--mini-font-size)"
				>
					Witness electrifying performances from student bands as they
					compete for the title of the best band in the Battle of
					Bands competition. Rock on!
				</Typography>
			</CardContent>
		</Card>
	);
}

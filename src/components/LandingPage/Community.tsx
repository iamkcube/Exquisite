import { Stack, Typography, Divider, Box } from "@mui/material";
import Starburst from "@utils/Starburst";

export default function Community() {
	return (
		<>
			<Stack id="Community">
				<Typography>Community</Typography>
				<Divider
					sx={{
						marginBlockStart: "0.5em",
						marginInlineStart: "-0.5rem",
						marginBlockEnd: "4em",
						bgcolor: "var(--accent-cyan)",
						height: "2px",
						width: "30%",
					}}
				/>
			</Stack>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "3fr 2fr 3fr",
					gridTemplateRows: "auto 1fr",
					gridTemplateAreas: `"sideImage content content" 
										"sideImage otherImage1 otherImage2"`,
					columnGap: "1rem",
					rowGap: "2rem",
					// width: "100vw",
					// marginInlineStart: "50%",
					// translate: "-50% 0",
				}}
			>
				<img
					src="https://www.unsplash.it/600/600"
					alt=""
					style={{
						gridArea: "sideImage",
						width: "100%",
						minHeight: "100%",
						objectFit: "cover",
					}}
				/>
				<Stack
					sx={{
						gridArea: "content",
					}}
				>
					<Stack direction="row">
						<Typography
							fontFamily="var(--fancy-font)"
							fontSize="2rem"
							marginInlineEnd="0.5em"
						>
							We are Indie Music Lovers!!!
						</Typography>
						{[1, 2, 3, 4, 5].map((_, index) => (
							<Starburst
								key={index}
								color="var(--accent-light-green)"
								width="1.75rem"
							/>
						))}
					</Stack>
					<Typography maxWidth="65ch">
						Passionate about alternative music and culture that is
						original and independent. We love self-expression and
						are interested in new and unknown artists. Enjoy live
						music and fellowship with like-minded people, share
						impressions of new albums as well as discuss current
						trends in indie music. We pride ourselves on our ease
						and desire for self-expression, and we're always happy
						to welcome new members to our community!
					</Typography>
				</Stack>
				<img
					src="https://www.unsplash.it/600/800"
					alt=""
					style={{
						gridArea: "otherImage1",
						width: "100%",
						minHeight: "100%",
						objectFit: "cover",
					}}
				/>{" "}
				<img
					src="https://www.unsplash.it/800/800"
					alt=""
					style={{
						gridArea: "otherImage2",
						width: "100%",
						minHeight: "100%",
						objectFit: "cover",
					}}
				/>
			</Box>
		</>
	);
}

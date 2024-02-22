import { useOtherContext } from "@/contexts/OtherContext";
import { Stack, Typography, Divider, Box } from "@mui/material";
import Starburst from "@utils/Starburst";

export default function Community() {
	const { isBigDevice } = useOtherContext();

	return (
		<>
			<Stack id="Community">
				<Typography fontWeight="bold">Community</Typography>
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
					gridTemplateRows: isBigDevice
						? "auto auto 1fr"
						: "repeat(3, auto)",
					gridTemplateAreas: isBigDevice
						? `"sideImage	heading		heading"
						   "sideImage 	content 	content" 
						   "sideImage otherImage1 otherImage2"`
						: `"heading		heading		heading"
						   "sideImage 	content 	content" 
						   "sideImage 	otherImage1 otherImage2"`,
					gap: isBigDevice ? "1rem" : "0.5rem",
				}}
			>
				<Typography
					fontFamily="var(--fancy-font)"
					fontSize="2rem"
					marginInlineEnd="0.5em"
					sx={{
						gridArea: "heading",
					}}
				>
					We are Indie Music Lovers!!!
					{[...Array(5)].map((_, index) => (
						<Starburst
							key={index}
							color="var(--accent-light-green)"
							width={isBigDevice ? "1.5rem" : "1rem"}
							style={{
								marginInlineStart: "0.25rem",
							}}
						/>
					))}
				</Typography>
				<Typography
					maxWidth="65ch"
					sx={{
						gridArea: "content",
						fontSize: isBigDevice
							? "1rem"
							: "var(--mini-font-size)",
					}}
				>
					Passionate about alternative music and culture that is
					original and independent. We love self-expression and are
					interested in new and unknown artists. Enjoy live music and
					fellowship with like-minded people, share impressions of new
					albums as well as discuss current trends in indie music. We
					pride ourselves on our ease and desire for self-expression,
					and we're always happy to welcome new members to our
					community!
				</Typography>
				<img
					src="https://source.unsplash.com/random/600x960/?music,festival"
					alt=""
					loading="lazy"
					style={{
						gridArea: "sideImage",
						width: "100%",
						minHeight: "100%",
						objectFit: "cover",
					}}
				/>
				<img
					src="https://source.unsplash.com/random/230x330/?music,festival"
					alt=""
					loading="lazy"
					style={{
						gridArea: "otherImage1",
						width: "100%",
						minHeight: "100%",
						objectFit: "cover",
					}}
				/>{" "}
				<img
					src="https://source.unsplash.com/random/480x480/?music,festival"
					alt=""
					loading="lazy"
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

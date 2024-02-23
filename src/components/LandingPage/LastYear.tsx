import { useOtherContext } from "@/contexts/OtherContext";
import { Divider, Stack, Typography } from "@mui/material";
import RoundedButton from "@utils/RoundedButton";
import { useNavigate } from "react-router-dom";

export default function LastYear() {
	const navigate = useNavigate();
	const { isBigDevice } = useOtherContext();

	return (
		<Stack>
			<Stack id="LastYear">
				<Typography fontWeight="bold">Last Year</Typography>
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
			<Stack
				direction="row"
				spacing={isBigDevice ? "1rem" : "0.5rem"}
				maxHeight="150vh"
				overflow="hidden"
				position="relative"
				sx={{
					"&::after": {
						content: '""',
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						backgroundImage: `linear-gradient(to top, var(--body-color), color-mix(in lab, var(--body-color) 80%, transparent), color-mix(in lab, var(--body-color) 40%, transparent), transparent)`,
						height: "20vh",
						zIndex: 2,
					},
				}}
			>
				{[...Array(3)].map((_, index1) => (
					<Stack
						key={index1}
						spacing={isBigDevice ? "1rem" : "0.5rem"}
					>
						{[...Array(5)].map((_, index2) => (
							<img
								key={index2}
								src={`https://source.unsplash.com/random?concert,${index1},${index2}`}
								style={{
									objectFit: "cover",
								}}
								alt=""
								loading="lazy"
							/>
						))}
					</Stack>
				))}
			</Stack>
			<RoundedButton
				text={"See all events"}
				onClick={() => {
					navigate("./events");
				}}
				sx={{
					marginInline: "auto",
				}}
			/>
		</Stack>
	);
}

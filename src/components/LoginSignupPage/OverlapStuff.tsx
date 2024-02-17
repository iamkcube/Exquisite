import { base64 } from "@/assets/StarburstFloralBase64";
import { Box, keyframes } from "@mui/material";

export default function OverlapStuff() {
	return (
		<>
			<Box
				sx={{
					width: "80vw",
					height: "min(40vh,250px)",
					backgroundColor: "var(--accent-white)",
					opacity: 0.25,
					zIndex: -2,
					gridArea: "top",
				}}
			></Box>
			<Box
				sx={{
					width: "80vw",
					height: "min(40vh,250px)",
					backgroundColor: "var(--accent-blue)",
					opacity: 0.25,
					zIndex: -2,
					gridArea: "bottom",
				}}
			></Box>
			<Box
				sx={{
					marginInline: "auto",
					width: "40rem",
					mask: `url(${base64}) no-repeat center / contain`,
					WebkitMask: `url(${base64}) no-repeat center / contain`,
					gridArea: "top-start/ top-start / bottom-end / bottom-end",
					zIndex: -1,
				}}
			>
				<Box
					className="gradient-hover"
					sx={{
						width: "100%",
						aspectRatio: 1,
						backgroundImage:
							"var(--gradient-overlay-black),  var(--radial-gradient-blue)",
						backgroundSize: "400%",
						backgroundPosition: "0% 0%",
						backgroundRepeat: "repeat",
						animation: `${backgroundMove} 30s ease-in-out infinite alternate`,
					}}
				></Box>
			</Box>
		</>
	);
}

const backgroundMove = keyframes`
		from {
			background-size:400%;
			background-position:0% 0%;
		}
		to{
			background-size:300%;
			background-position:100% 100%;
		}
`;

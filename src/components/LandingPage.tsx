import MainContent from "@landingpage/MainContent";
import Navbar from "@landingpage/Navbar";
import { Box } from "@mui/material";

export default function LandingPage() {
	return (
		<Box
			sx={{
				width: "min(100% - 3rem, 960px)",
				marginInline: "auto",
			}}
		>
			<Navbar />
			<MainContent />
		</Box>
	);
}

import AboutUs from "@landingpage/AboutUs";
import Community from "@landingpage/Community";
import InfoDivider from "@landingpage/InfoDivider";
import MainContent from "@landingpage/MainContent";
import Navbar from "@landingpage/Navbar";
import SectionDivider from "@landingpage/SectionDivider";
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
			<SectionDivider />
			<AboutUs/>
			<SectionDivider />
			<InfoDivider/>
			<SectionDivider />
			<Community />
			<SectionDivider />
		</Box>
	);
}

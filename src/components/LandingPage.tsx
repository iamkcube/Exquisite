import AboutUs from "@landingpage/AboutUs";
import Community from "@landingpage/Community";
import Footer from "@landingpage/Footer";
import InfoDivider from "@landingpage/InfoDivider";
import MainContent from "@landingpage/MainContent";
import Navbar from "@landingpage/Navbar";
import SectionDivider from "@landingpage/SectionDivider";
import WhereandWhen from "@landingpage/WhereandWhen";
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
			<AboutUs />
			<SectionDivider />
			<InfoDivider />
			<SectionDivider />
			<WhereandWhen />
			<SectionDivider />
			<Community />
			<SectionDivider />
			<Footer />
		</Box>
	);
}

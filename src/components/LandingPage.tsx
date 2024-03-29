import AboutUs from "@landingpage/AboutUs";
import Community from "@landingpage/Community";
import LastYear from "@landingpage/LastYear";
import Footer from "@landingpage/Footer";
import InfoDivider from "@landingpage/InfoDivider";
import MainContent from "@landingpage/MainContent";
import Navbar from "@landingpage/Navbar";
import WhereandWhen from "@landingpage/WhereandWhen";
import { Box } from "@mui/material";
import SectionDivider from "@utils/SectionDivider";

export default function LandingPage() {
	return (
		<Box
			sx={{
				width: "min(100% - 4rem, 960px)",
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
			<LastYear />
			<SectionDivider />
			<Community />
			<SectionDivider />
			<Footer />
		</Box>
	);
}

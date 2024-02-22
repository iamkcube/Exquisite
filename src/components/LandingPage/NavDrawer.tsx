import StarburstDesignStuff from "@components/LoginSignupPage/StarburstDesignStuff";
import NavbarLinks from "@landingpage/NavbarLinks";
import Drawer from "@mui/material/Drawer";
import Starburst from "@utils/Starburst";
import StarburstPolygon from "@utils/StarburstPolygon";

interface NavDrawerProps {
	isDrawerOpen: boolean;
	setIsDrawerOpen: (x: boolean) => void;
}

export default function NavDrawer({
	isDrawerOpen,
	setIsDrawerOpen,
}: NavDrawerProps) {
	return (
		<>
			<Drawer
				anchor={"right"}
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
				disableRestoreFocus
				PaperProps={{
					style: {
						overflow: "hidden",
						// backgroundColor: "var(--radial-gradient)",
					},
				}}
			>
				<StarburstDesignStuff />
				<StarburstPolygon
					color={"var(--accent-cyan)"}
					width={"8rem"}
					style={{
						position: "absolute",
						opacity: 0.2,
						bottom: "20%",
						right: "-10%",
					}}
				/>
				<Starburst
					color={"var(--accent-blue)"}
					width={"10rem"}
					style={{
						position: "absolute",
						opacity: 0.2,
						top: "25%",
						left: "-20%",
					}}
				/>
				<NavbarLinks
					forDrawer
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
				/>
			</Drawer>
		</>
	);
}

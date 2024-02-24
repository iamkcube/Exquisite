import { useAuth } from "@/contexts/AuthContext";
import { useOtherContext } from "@/contexts/OtherContext";
import NavDrawer from "@landingpage/NavDrawer";
import NavbarLinks from "@landingpage/NavbarLinks";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import RoundedButton from "@utils/RoundedButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
	const { userLoggedIn, currentUser, userDoc } = useAuth();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { isBigDevice, isSmallDevice } = useOtherContext();

	return (
		<nav
			style={{
				position: "sticky",
				top: 0,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				marginBlock: "1em",
				paddingBlock: "1em",
				backgroundColor: "var(--body-color)",
				zIndex: 100,
				// full-bleed
				boxShadow: "0 0 0 100vmax var(--body-color)",
				clipPath: "inset(0 -100vmax)",
			}}
		>
			<IconButton
				// disableRipple
				sx={{ padding: 0 }}
				onClick={() => window.scrollTo(0, 0)}
			>
				<img
					src="/logo.svg"
					alt="Logo"
					width={isBigDevice ? "48px" : "40px"}
				/>
			</IconButton>
			<NavDrawer
				isDrawerOpen={isDrawerOpen}
				setIsDrawerOpen={setIsDrawerOpen}
			/>

			{isBigDevice && <NavbarLinks />}
			<RoundedButton
				text={userLoggedIn ? "Register" : "Log In/Sign Up"}
				onClick={() => {
					navigate(userLoggedIn ? "./events" : "./login");
				}}
			/>

			{userLoggedIn && (
				<Link to="./login">
					<Avatar
						src={
							userDoc?.photoUrl ||
							currentUser?.photoURL ||
							"https://www.unsplash.it/100/100"
						}
					></Avatar>
				</Link>
			)}
			{isSmallDevice && (
				<IconButton onClick={() => setIsDrawerOpen(true)}>
					<MenuIcon />
				</IconButton>
			)}
		</nav>
	);
}

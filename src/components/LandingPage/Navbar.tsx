import { auth } from "@/config/firebase";
import { Avatar } from "@mui/material";
import RoundedButton from "@utils/RoundedButton";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				marginBlock: "2em",
			}}
		>
			<img
				src="/vite.svg"
				alt="Logo"
			/>
			<ul
				style={{
					display: "flex",
					gap: "1.5rem",
					listStyle: "none",
				}}
			>
				<Link to="./login">About</Link>
				<Link to="./login">Where&When</Link>
				<Link to="./login">Community</Link>
				<Link to="./login">Line Up</Link>
				<Link to="./login">Last Year</Link>
				<Link to="./login">Pricing</Link>
			</ul>
			<RoundedButton
				text="Buy a Ticket"
				padding="2rem"
				onClick={() => {
					navigate("./login");
				}}
			/>
			<Avatar
				src={
					auth?.currentUser?.photoURL ||
					"https://www.unsplash.it/40/40"
				}
			></Avatar>
		</nav>
	);
}

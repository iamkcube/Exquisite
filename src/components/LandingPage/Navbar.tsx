/** @jsxImportSource @emotion/react */
import { useAuth } from "@/contexts/AuthContext";
import { css } from "@emotion/react";
import { Avatar, Typography } from "@mui/material";
import RoundedButton from "@utils/RoundedButton";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
	const { userLoggedIn, currentUser, userDoc } = useAuth();

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
				<Typography
					css={linkStyle}
					onClick={() =>
						document.getElementById("AboutUs")?.scrollIntoView()
					}
				>
					About
				</Typography>
				<Typography
					css={linkStyle}
					onClick={() =>
						document
							.getElementById("WhereandWhen")
							?.scrollIntoView()
					}
				>
					Where&When
				</Typography>
				<Typography
					css={linkStyle}
					onClick={() =>
						document.getElementById("Community")?.scrollIntoView()
					}
				>
					Community
				</Typography>
				<Link
					to="./events"
					css={linkStyle}
				>
					Events
				</Link>
				<Link
					to="./login"
					css={linkStyle}
				>
					Last Year
				</Link>
				<Link
					to="./login"
					css={linkStyle}
				>
					Pricing
				</Link>
			</ul>
			<RoundedButton
				text="Buy a Ticket"
				onClick={() => {
					navigate("./login");
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
		</nav>
	);
}

const linkStyle = css`
	color: var(--text-color);
	text-decoration: none;
	text-transform: none;
	cursor: pointer;
	&:hover {
		color: var(--accent-main-purple);
	}
`;

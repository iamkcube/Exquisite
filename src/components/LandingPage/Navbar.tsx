/** @jsxImportSource @emotion/react */
import { useAuth } from "@/contexts/AuthContext";
import { css } from "@emotion/react";
import { Avatar, Typography } from "@mui/material";
import RoundedButton from "@utils/RoundedButton";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
	const { currentUser } = useAuth();

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
				<Typography
					css={linkStyle}
					onClick={() => document.getElementById("AboutUs")?.scrollIntoView()}
				>
					About
				</Typography>
				<Link
					to="./login"
					css={linkStyle}
				>
					Where&When
				</Link>
				<Link
					to="./login"
					css={linkStyle}
				>
					Community
				</Link>
				<Link
					to="./login"
					css={linkStyle}
				>
					Line Up
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
				padding="2rem"
				onClick={() => {
					navigate("./login");
				}}
			/>
			<Link to="./login">
				<Avatar
					src={
						currentUser?.photoURL || "https://www.unsplash.it/40/40"
					}
				></Avatar>
			</Link>
		</nav>
	);
}

const linkStyle = css`
	color: var(--text-color);
	text-decoration: none;
	text-transform: none;
	&:hover {
		color: var(--accent-main-purple);
	}
`;

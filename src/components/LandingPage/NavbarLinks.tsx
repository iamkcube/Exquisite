/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

interface NavbarLinksProps {
	forDrawer?: boolean;
	isDrawerOpen?: boolean;
	setIsDrawerOpen?: (x: boolean) => void;
}

export default function NavbarLinks({
	forDrawer = false,
	isDrawerOpen,
	setIsDrawerOpen,
}: NavbarLinksProps) {
	return (
		<List
			sx={{
				display: "flex",
				flexDirection: forDrawer ? "column" : "row",
				// gap: "1.5rem",
				listStyle: "none",
				width: forDrawer ? 250 : "auto",
			}}
			onClick={() => setIsDrawerOpen && setIsDrawerOpen(!isDrawerOpen)}
			onKeyDown={() => setIsDrawerOpen && setIsDrawerOpen(!isDrawerOpen)}
		>
			<ListItem
				css={linkStyle}
				onClick={() => {
					document.getElementById("AboutUs")?.scrollIntoView();
					// setIsDrawerOpen && setIsDrawerOpen(!isDrawerOpen);
				}}
			>
				About
			</ListItem>
			<ListItem
				css={linkStyle}
				onClick={() => {
					document.getElementById("WhereandWhen")?.scrollIntoView();
					// setIsDrawerOpen && setIsDrawerOpen(!isDrawerOpen);
				}}
			>
				Where&When
			</ListItem>
			<ListItem
				css={linkStyle}
				onClick={() =>
					document.getElementById("Community")?.scrollIntoView()
				}
			>
				Community
			</ListItem>
			<ListItem>
				<Link
					to="./events"
					css={linkStyle}
				>
					Events
				</Link>
			</ListItem>
			<ListItem>
				<Link
					to="./login"
					css={linkStyle}
				>
					Last Year
				</Link>
			</ListItem>
			<ListItem>
				<Link
					to="./login"
					css={linkStyle}
				>
					Pricing
				</Link>
			</ListItem>{" "}
		</List>
	);
}

const linkStyle = css`
	color: var(--text-color);
	text-decoration: none;
	text-transform: none;
	cursor: pointer;
	white-space: nowrap;
	&:hover {
		color: var(--accent-main-purple);
	}
`;

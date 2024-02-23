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
	const forDrawerLinkStyles = `
	width: 100%;
	background-color: color-mix(in srgb, var(--accent-white) 10%, transparent);
	border-radius: 8px;
	padding: 0.75rem;`;

	const linkStyle = css`
		color: var(--text-color);
		text-decoration: none;
		text-transform: none;
		cursor: pointer;
		white-space: nowrap;
		${forDrawer && forDrawerLinkStyles}
		&:hover {
			color: var(--accent-main-purple);
		}
	`;

	return (
		<List
			sx={{
				display: "flex",
				flexDirection: forDrawer ? "column" : "row",
				listStyle: "none",
				width: forDrawer ? 250 : "auto",
				padding: forDrawer ? "0.5rem" : "auto",
				...(forDrawer && {
					marginBlockStart: "4rem",
				}),
			}}
			onClick={() => setIsDrawerOpen && setIsDrawerOpen(!isDrawerOpen)}
			// onKeyDown={() => setIsDrawerOpen && setIsDrawerOpen(!isDrawerOpen)}
		>
			<ListItem>
				<Link
					to="#AboutUs"
					css={linkStyle}
					onClick={() =>
						document.getElementById("AboutUs")?.scrollIntoView()
					}
				>
					About
				</Link>
			</ListItem>
			<ListItem>
				<Link
					to="#WhereandWhen"
					css={linkStyle}
					onClick={() =>
						document
							.getElementById("WhereandWhen")
							?.scrollIntoView()
					}
				>
					Where&When
				</Link>
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
					to="#Community"
					css={linkStyle}
					onClick={() =>
						document.getElementById("Community")?.scrollIntoView()
					}
				>
					Community
				</Link>
			</ListItem>
			<ListItem>
				<Link
					to="#LastYear"
					css={linkStyle}
					onClick={() =>
						document.getElementById("LastYear")?.scrollIntoView()
					}
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

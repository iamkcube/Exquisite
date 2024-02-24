/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconButton, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useOtherContext } from "@/contexts/OtherContext";

export default function Footer() {
	const { isBigDevice } = useOtherContext();

	return (
		<Stack
			direction={isBigDevice ? "row" : "column-reverse"}
			justifyContent="space-between"
			alignItems="center"
			width="80vw"
			gap={isBigDevice ? "auto" : "0.25rem"}
			marginInlineStart="40%"
			marginBlockEnd="1rem"
			sx={{
				transform: "translateX(-40%)",
			}}
		>
			<Typography
				color="var(--accent-blue)"
				fontSize="var(--mini-font-size)"
			>
				Privacy Policy
			</Typography>
			<Stack
				alignItems="center"
				spacing={0.25}
			>
				<Typography
					color="var(--accent-blue)"
					fontSize="var(--mini-font-size)"
				>
					Made with ❤️ by{" "}
					<span css={mainLinkStyles}>
						<a
							target="_blank"
							href="http://github.com/iamkcube"
							css={linkStyle}
						>
							iamkcube
						</a>
					</span>
				</Typography>
				<Typography
					color="var(--accent-blue)"
					fontSize="var(--mini-font-size)"
				>
					Design by{" "}
					<span css={mainLinkStyles}>
						<a
							target="_blank"
							href="https://www.behance.net/allamalina"
							css={linkStyle}
						>
							Elizaveta Vasyutkina
						</a>
					</span>
				</Typography>
			</Stack>
			<Stack
				direction="row"
				marginBlockEnd={isBigDevice ? "auto" : "1rem"}
				gap="0.25rem"
			>
				<IconButton
					color="primary"
					onClick={() =>
						window.open(
							"https://www.instagram.com/kalinga._",
							"_blank"
						)
					}
				>
					<InstagramIcon />
				</IconButton>
				<IconButton
					color="primary"
					onClick={() =>
						window.open(
							"https://www.linkedin.com/in/kalingakhatua",
							"_blank"
						)
					}
				>
					<LinkedInIcon />
				</IconButton>
				<IconButton
					color="primary"
					onClick={() =>
						window.open("https://www.x.com/iamkcube_", "_blank")
					}
				>
					<XIcon />
				</IconButton>
				<IconButton
					color="primary"
					onClick={() =>
						window.open("https://youtube.com/@kalinga_", "_blank")
					}
				>
					<YouTubeIcon />
				</IconButton>
			</Stack>
		</Stack>
	);
}
const linkStyle = css`
	color: var(--accent-main-purple);
	text-decoration: none;
	text-transform: none;
`;

const mainLinkStyles = css`
	position: relative;
	text-decoration: none;
	&:before {
		content: "";
		display: inline-block;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 2px;
		background-color: var(--accent-main-purple);
		scale: 0% 50%;
		transform-origin: right;
		transition: scale 0.3s ease-in-out;
	}
	&:hover:before {
		scale: 100% 50%;
		transform-origin: left;
		height: 2px;
	}
`;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconButton, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
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
			<Stack
				direction="row"
				marginBlockEnd={isBigDevice ? "auto" : "1rem"}
				gap="0.25rem"
			>
				<IconButton color="primary">
					<InstagramIcon />
				</IconButton>
				<IconButton color="primary">
					<FacebookIcon />
				</IconButton>
				<IconButton color="primary">
					<XIcon />
				</IconButton>
				<IconButton color="primary">
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
	&:before {
		content: "";
		display: inline-block;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 2px;
		background-color: var(--accent-main-purple);
		scale: 0% 100%;
		transform-origin: right;
		transition: scale 0.3s ease-in-out;
	}
	&:hover:before {
		scale: 100% 100%;
		transform-origin: left;
	}
`;

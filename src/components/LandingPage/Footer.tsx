/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconButton, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			width="80vw"
			marginInlineStart="40%"
			marginBlockEnd="1rem"
			sx={{
				transform: "translateX(-40%)",
			}}
		>
			<Typography color="var(--accent-blue)" fontSize="var(--mini-font-size)">Privacy Policy</Typography>
			<Typography color="var(--accent-blue)" fontSize="var(--mini-font-size)">
				Made with ❤️ by{" "}
				<span
					css={css`
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
					`}
				>
					<a
						target="_blank"
						href="http://github.com/iamkcube"
						css={linkStyle}
					>
						iamkcube
					</a>
				</span>
			</Typography>
			<Stack direction="row">
				<IconButton color="secondary">
					<InstagramIcon />
				</IconButton>
				<IconButton color="secondary">
					<FacebookIcon />
				</IconButton>
				<IconButton color="secondary">
					<XIcon />
				</IconButton>
				<IconButton color="secondary">
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

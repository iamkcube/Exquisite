import { useOtherContext } from "@/contexts/OtherContext";
import { Box, Divider, Stack, Typography } from "@mui/material";
import RoundedButton from "@utils/RoundedButton";
import StarburstFloral from "@utils/StarburstFloral";
import { useNavigate } from "react-router-dom";

export default function WhereandWhen() {
	const navigate = useNavigate();
	const { isBigDevice } = useOtherContext();

	return (
		<>
			<Stack id="WhereandWhen">
				<Typography fontWeight="bold">Where&When</Typography>
				<Divider
					sx={{
						marginBlockStart: "0.5em",
						marginInlineStart: "-0.5rem",
						marginBlockEnd: "4em",
						bgcolor: "var(--accent-cyan)",
						height: "2px",
						width: "30%",
					}}
				/>
			</Stack>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: isBigDevice ? "auto 1fr" : "auto",
					gap: "4rem",
					overflowX: "hidden",
				}}
			>
				<Stack spacing="1rem">
					<Typography fontSize="1.25rem">
						Ekamra Vihar, Kharvela Nagar, <br />
						Bhubaneswar, Odisha 751001
					</Typography>
					<Typography
						fontSize="1.25rem"
						color="var(--accent-main-purple)"
						fontWeight="700"
					>
						Exhibiton Ground
					</Typography>
					<Typography
						fontSize="1.25rem"
						marginBlockEnd="2rem !important"
					>
						Aug 3-6, 2023
					</Typography>
					<RoundedButton
						text="Register Now!"
						sx={{
							alignSelf: "start",
						}}
						onClick={() => {
							navigate("./events");
						}}
					/>
				</Stack>
				<Box
					sx={{
						position: "relative",
						order: isBigDevice ? 1 : -1,
					}}
				>
					<StarburstFloral
						color="var(--accent-green)"
						width="15rem"
						style={{
							position: "absolute",
							zIndex: 1,
							top: "-6rem",
							right: "-6rem",
							// opacity: 0.5,
						}}
					/>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1871.2723209405647!2d85.8357068802852!3d20.277711383209823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a759c54b47ed%3A0x54c118ed7ba19b85!2sExhibition%20Ground%2C%20Ekamra%20Vihar%2C%20Kharvela%20Nagar%2C%20Bhubaneswar%2C%20Odisha%20751001!5e0!3m2!1sen!2sin!4v1708051707631!5m2!1sen!2sin"
						width="100%"
						height="450"
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						style={{
							border: 0,
							filter: "grayscale(40%)",
						}}
					></iframe>
				</Box>
			</Box>
		</>
	);
}

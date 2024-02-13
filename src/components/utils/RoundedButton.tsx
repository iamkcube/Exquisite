import { Button } from "@mui/material";

type RoundedButtonProps = {
	text: string;
	padding?: string;
	onClick: () => void;
};

export default function RoundedButton({
	text,
	padding,
	onClick,
}: RoundedButtonProps) {
	return (
		<Button
			variant="outlined"
			onClick={onClick}
			sx={{ borderRadius: 100, paddingInline: padding }}
		>
			{text}
		</Button>
	);
}

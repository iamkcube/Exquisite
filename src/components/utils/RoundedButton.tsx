import { LoadingButton } from "@mui/lab";

type RoundedButtonProps = {
	text: string;
	isLoading?: boolean;
	borderWidth?: number;
	color?:
		| "primary"
		| "inherit"
		| "secondary"
		| "success"
		| "error"
		| "info"
		| "warning"
		| undefined;
	contained?: boolean;
	sx?: React.CSSProperties;
	onClick: () => void;
};

export default function RoundedButton({
	text,
	isLoading,
	borderWidth = 2,
	color = "primary",
	contained = false,
	sx,
	onClick,
}: RoundedButtonProps) {
	return (
		<LoadingButton
			disableElevation
			loading={isLoading}
			color={color}
			variant={contained ? "contained" : "outlined"}
			onClick={onClick}
			sx={{
				borderRadius: 100,
				borderWidth: borderWidth,
				paddingInline: "2rem",
				paddingBlock: "0.6rem",
				color: "var(--text-color)",
				textTransform: "none",
				"&:hover": {
					borderWidth: borderWidth,
				},
				...sx,
			}}
		>
			{text}
		</LoadingButton>
	);
}

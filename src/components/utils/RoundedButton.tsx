import { LoadingButton } from "@mui/lab";

type RoundedButtonProps = {
	text: string;
	padding?: string;
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
	isLoading?: boolean;
	sx?: React.CSSProperties;
	onClick: () => void;
};

export default function RoundedButton({
	text,
	padding,
	isLoading,
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
				paddingInline: padding,
				color: "var(--text-color)",
				textTransform: "none",
				...sx,
			}}
		>
			{text}
		</LoadingButton>
	);
}

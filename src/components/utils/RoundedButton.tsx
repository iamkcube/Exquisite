import { LoadingButton } from "@mui/lab";

type RoundedButtonProps = {
	text: string;
	type?: "reset" | "button" | "submit" | undefined;
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
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function RoundedButton({
	text,
	type,
	isLoading,
	borderWidth = 2,
	color = "primary",
	contained = false,
	sx,
	onClick,
}: RoundedButtonProps) {
	return (
		<LoadingButton
			type={type}
			disableElevation
			loading={isLoading}
			color={color}
			variant={contained ? "contained" : "outlined"}
			onClick={onClick}
			sx={{
				borderRadius: 100,
				paddingInline: "2rem",
				paddingBlock: "0.6rem",
				color: "var(--text-color)",
				textTransform: "none",
				"&.MuiLoadingButton-root": {
					borderWidth: borderWidth,
				},
				...sx,
			}}
		>
			{text}
		</LoadingButton>
	);
}

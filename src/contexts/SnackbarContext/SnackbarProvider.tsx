import { SnackbarContext } from "@/contexts/SnackbarContext";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { ReactNode, useState } from "react";

interface State extends SnackbarOrigin {
	open: boolean;
}

export default function SnackbarProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [state, setState] = useState<State>({
		open: false,
		vertical: "top",
		horizontal: "center",
	});
	const { vertical, horizontal, open } = state;
	const [message, setMessage] = useState("");

	function openSnackbar(
		newMessage: string,
		vertical: "top" | "bottom" = "top",
		horizontal: "left" | "right" | "center" = "center"
	) {
		setMessage(newMessage);
		handleClick({ vertical: vertical, horizontal: horizontal });
	}

	const handleClick = (newState: SnackbarOrigin) => {
		setState({ ...newState, open: true });
	};

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	return (
		<SnackbarContext.Provider value={{ openSnackbar }}>
			{children}
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				onClose={handleClose}
				autoHideDuration={5000}
				message={message}
				key={vertical + horizontal}
			/>
		</SnackbarContext.Provider>
	);
}

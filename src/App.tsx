import { AuthProvider } from "@/contexts/AuthContext";
import LandingPage from "@components/LandingPage";
import LoginPage from "@components/LoginPage";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#b282ff",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#2c4b9a",
			contrastText: "#ffffff",
		},
	},
	typography: {
		fontFamily: [
			"Poppins",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes>
						<Route
							path="/login"
							element={<LoginPage />}
						/>
						<Route
							path="/"
							element={<LandingPage />}
						/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;

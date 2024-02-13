import LandingPage from "@components/LandingPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "@components/LoginPage";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
	
const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#b282ff",
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
		<ThemeProvider theme={theme}>
			<CssBaseline />
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
	);
}

export default App;

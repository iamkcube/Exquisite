import { AuthProvider } from "@/contexts/AuthContext";
import SnackbarProvider from "@/contexts/SnackbarContext/SnackbarProvider";
import EventsPage from "@components/EventsPage";
import LandingPage from "@components/LandingPage";
import LoginSignupPage from "@components/LoginSignupPage";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "@utils/ScrollToTop";
import OtherContextProvider from "@/contexts/OtherContext";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#b282ff",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#75e494",
			contrastText: "#222222",
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
			<OtherContextProvider>
				<SnackbarProvider>
					<ThemeProvider theme={theme}>
						<BrowserRouter>
							<ScrollToTop />
							<Routes>
								<Route
									path="/*"
									element={<LoginSignupPage />}
								/>
								<Route
									path="/events"
									element={<EventsPage />}
								/>
								<Route
									path="/"
									element={<LandingPage />}
								/>
							</Routes>
						</BrowserRouter>
					</ThemeProvider>
				</SnackbarProvider>
			</OtherContextProvider>
		</AuthProvider>
	);
}

export default App;

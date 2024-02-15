import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@landingpage": resolve(__dirname, "./src/components/LandingPage/"),
			"@utils": resolve(__dirname, "./src/components/utils/"),
			"@api": resolve(__dirname, "./src/api/"),
			"@components": resolve(__dirname, "./src/components/"),
			"@": resolve(__dirname, "./src"),
		},
	},
	build: {
		outDir: "build",
		sourcemap: true,
	},
});

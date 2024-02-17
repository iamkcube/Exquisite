import StarburstFloral from "@utils/StarburstFloral";
import StarburstLines from "@utils/StarburstLines";
import StarburstOutline from "@utils/StarburstOutline";
import StarburstPolygon from "@utils/StarburstPolygon";

export default function StarburstDesignStuff() {
	return (
		<>
			<StarburstPolygon
				color={"var(--accent-light-green)"}
				width={"12.5rem"}
				style={{
					position: "absolute",
					top: 0,
					right: 300,
					opacity: 0.25,
				}}
			/>
			<StarburstOutline
				color={"var(--accent-light-green)"}
				width={"10rem"}
				style={{
					position: "absolute",
					bottom: 100,
					left: 300,
					opacity: 0.25,
				}}
			/>
			<StarburstLines
				color={"var(--accent-main-purple)"}
				width={"10rem"}
				style={{
					position: "absolute",
					bottom: 100,
					left: 300,
					opacity: 0.25,
				}}
			/>
			<StarburstFloral
				color={"var(--accent-main-purple)"}
				width={"40rem"}
				style={{
					position: "absolute",
					bottom: -200,
					right: -300,
					opacity: 0.1,
				}}
			/>
			<StarburstLines
				color={"var(--accent-main-purple)"}
				width={"20rem"}
				style={{
					position: "absolute",
					top: -50,
					left: 20,
					opacity: 0.1,
				}}
			/>
		</>
	);
}

import { styled, useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";

const Circle = styled("div")({
	position: "fixed",
	height: "40px",
	width: "40px",
	border: "1px solid var(--accent-main-purple)",
	borderRadius: "100%",
	top: "-20px",
	left: "-20px",
	pointerEvents: "none",
	boxSizing: "border-box",
	zIndex: 1000,
	opacity: 0,
	transition:"opacity 500ms ease",
	"body:hover &": {
		opacity: 1,
	},
});

export default function CircleComponent() {
	const isTouchDevice = useMediaQuery("(pointer:coarse)");
	const circleRef = useRef<HTMLDivElement | null>(null);
	const mouse = { x: 0, y: 0 };
	const previousMouse = { x: 0, y: 0 };
	const circle = { x: 0, y: 0 };
	let currentScale = 0;
	let currentAngle = 0;
	const speed = 0.17;

	useEffect(() => {
		const tick = () => {
			circle.x += (mouse.x - circle.x) * speed;
			circle.y += (mouse.y - circle.y) * speed;
			const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

			const deltaMouseX = mouse.x - previousMouse.x;
			const deltaMouseY = mouse.y - previousMouse.y;
			previousMouse.x = mouse.x;
			previousMouse.y = mouse.y;
			const mouseVelocity = Math.min(
				Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
				150
			);
			const scaleValue = (mouseVelocity / 150) * 0.5;
			currentScale += (scaleValue - currentScale) * speed;
			const scaleTransform = `scale(${1 + currentScale}, ${
				1 - currentScale
			})`;

			const angle =
				(Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
			if (mouseVelocity > 20) {
				currentAngle = angle;
			}
			const rotateTransform = `rotate(${currentAngle}deg)`;

			if (circleRef.current) {
				circleRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
			}

			window.requestAnimationFrame(tick);
		};

		window.addEventListener("mousemove", (e) => {
			mouse.x = e.x;
			mouse.y = e.y;
		});

		tick();
	}, []);

	return !isTouchDevice ? (
		<Circle
			id="AnimatedCircle"
			ref={circleRef}
		/>
	) : (
		<></>
	);
}

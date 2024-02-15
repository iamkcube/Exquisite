interface StarburstOutlineProps {
	color: string;
	width: string;
}

export default function StarburstOutline({
	color,
	width,
}: StarburstOutlineProps) {
	return (
		<svg
			width={width}
			viewBox="0 0 68 68"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M32.0247 7.34775L32.0247 7.34772L33.61 1.81514L35.1953 7.34772C38.6138 19.2795 47.9415 28.6062 59.8733 32.0247L65.405 33.61L59.8723 35.1953C47.9405 38.6138 38.6138 47.9405 35.1953 59.8723L33.61 65.4049L32.0247 59.8723C28.6062 47.9405 19.2795 38.6138 7.3477 35.1953L1.81503 33.61L7.34671 32.0247C19.2786 28.6062 28.6051 19.2785 32.0247 7.34775Z"
				stroke={color}
			/>
		</svg>
	);
}

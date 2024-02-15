interface StarburstProps {
	color: string;
	width: string;
	style?: React.CSSProperties;
}

export default function Starburst({ color, style, width }: StarburstProps) {
	return (
		<svg
			width={width}
			viewBox="0 0 69 69"
			fill="none"
			style={style}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M34.511 0.388L36.577 7.59799C39.948 19.364 49.146 28.561 60.912 31.932L68.121 33.998L60.911 36.064C49.145 39.435 39.948 48.632 36.577 60.398L34.511 67.608L32.445 60.398C29.074 48.632 19.877 39.435 8.11099 36.064L0.901001 33.998L8.11 31.932C19.876 28.561 29.073 19.363 32.445 7.59799L34.511 0.388Z"
				fill={color}
			/>
		</svg>
	);
}

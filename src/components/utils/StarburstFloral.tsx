interface StarburstProps {
	color: string;
	width: string;
	style: object;
	fillColor?: string | undefined;
}

export default function StarburstFloral({
	color,
	width,
	style,
	fillColor = "white",
}: StarburstProps) {
	return (
		<svg
			id="StarburstFloral"
			width={width}
			viewBox="0 0 68 68"
			fill={fillColor}
			xmlns="http://www.w3.org/2000/svg"
			style={style}
		>
			<mask
				id="path-1-inside-1_95_2051"
				fill="white"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M38.5102 10.9888C38.5102 11.0986 38.5089 11.2174 38.5064 11.3448C38.5528 11.2262 38.5971 11.1159 38.6391 11.0145C41.4977 4.11314 45.0176 1.76229 47.0112 2.58809C49.0046 3.41359 49.6654 7.96604 46.9729 14.4664C46.9308 14.5679 46.8842 14.6772 46.8331 14.7939C46.9214 14.702 47.0045 14.6171 47.0822 14.5394C52.3642 9.25739 56.5158 8.43248 58.0416 9.95836C59.5674 11.4838 58.4357 15.9427 53.4606 20.9178C53.3829 20.9955 53.298 21.0786 53.2061 21.1669C53.3228 21.1158 53.4321 21.0691 53.5336 21.0271C60.4349 18.1685 64.5861 18.9951 65.4119 20.9888C66.2377 22.982 63.4859 26.6683 56.9855 29.3609C56.8841 29.4029 56.7738 29.4472 56.6552 29.4936C56.7825 29.4911 56.9014 29.4898 57.0112 29.4898C64.4811 29.4898 68 31.8421 68 34C68.0002 36.1575 64.0471 38.5102 57.0112 38.5102C56.9014 38.5102 56.7825 38.5089 56.6551 38.5064C56.7738 38.5528 56.8841 38.5971 56.9855 38.6391C63.8869 41.4977 66.2377 45.0176 65.4119 47.0112C64.5864 49.0046 60.034 49.6654 53.5336 46.9729C53.4321 46.9309 53.3228 46.8842 53.2061 46.8331C53.298 46.9214 53.3829 47.0045 53.4606 47.0822C58.7426 52.3642 59.5675 56.5158 58.0416 58.0416C56.5161 59.5674 52.0573 58.4357 47.0822 53.4606C47.0045 53.3829 46.9214 53.298 46.8331 53.2061C46.8842 53.3228 46.9309 53.4321 46.9729 53.5336C49.8315 60.4349 49.0049 64.5861 47.0112 65.4119C45.018 66.2377 41.3317 63.4859 38.6391 56.9855C38.5971 56.8841 38.5528 56.7738 38.5064 56.6552C38.5089 56.7826 38.5102 56.9014 38.5102 57.0112C38.5102 64.4811 36.1579 68 34 68C31.8425 68.0002 29.4898 64.0471 29.4898 57.0112C29.4898 56.9014 29.4911 56.7825 29.4936 56.6551C29.4472 56.7738 29.4029 56.8841 29.3609 56.9855C26.5023 63.8869 22.9824 66.2377 20.9888 65.4119C18.9954 64.5864 18.3346 60.034 21.0271 53.5336C21.0691 53.4321 21.1158 53.3228 21.1669 53.2061C21.0786 53.298 20.9955 53.3829 20.9178 53.4606C15.6358 58.7426 11.4843 59.5675 9.95837 58.0416C8.43265 56.5161 9.56427 52.0573 14.5394 47.0822C14.6171 47.0045 14.702 46.9214 14.7939 46.8331C14.6772 46.8842 14.5679 46.9309 14.4664 46.9729C7.5651 49.8315 3.4139 49.0049 2.5881 47.0112C1.76229 45.018 4.51408 41.3317 11.0145 38.6391C11.1159 38.5971 11.2262 38.5528 11.3448 38.5064C11.2174 38.5089 11.0986 38.5102 10.9888 38.5102C3.51888 38.5102 0 36.1579 0 34C-0.000163914 31.8425 3.95286 29.4898 10.9888 29.4898C11.0986 29.4898 11.2175 29.4911 11.3448 29.4936C11.2262 29.4472 11.1159 29.4029 11.0144 29.3609C4.11313 26.5023 1.76228 22.9824 2.58808 20.9888C3.41358 18.9954 7.96602 18.3346 14.4664 21.0271C14.5679 21.0691 14.6772 21.1158 14.7939 21.1669C14.702 21.0786 14.6171 20.9955 14.5394 20.9178C9.25741 15.6358 8.43249 11.4843 9.95837 9.95837C11.4839 8.43265 15.9427 9.56427 20.9178 14.5394C20.9955 14.6171 21.0786 14.702 21.1669 14.7939C21.1158 14.6772 21.0691 14.5679 21.0271 14.4664C18.1685 7.5651 18.9951 3.4139 20.9887 2.5881C22.982 1.76229 26.6683 4.51408 29.3609 11.0145C29.4029 11.1159 29.4472 11.2262 29.4936 11.3449C29.4911 11.2175 29.4898 11.0986 29.4898 10.9888C29.4898 3.51888 31.8421 0 34 0C36.1575 -0.00016413 38.5102 3.95286 38.5102 10.9888Z"
				/>
			</mask>
			{fillColor && (
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M38.5102 10.9888C38.5102 11.0986 38.5089 11.2174 38.5064 11.3448C38.5528 11.2262 38.5971 11.1159 38.6391 11.0145C41.4977 4.11314 45.0176 1.76229 47.0112 2.58809C49.0046 3.41359 49.6654 7.96604 46.9729 14.4664C46.9308 14.5679 46.8842 14.6772 46.8331 14.7939C46.9214 14.702 47.0045 14.6171 47.0822 14.5394C52.3642 9.25739 56.5158 8.43248 58.0416 9.95836C59.5674 11.4838 58.4357 15.9427 53.4606 20.9178C53.3829 20.9955 53.298 21.0786 53.2061 21.1669C53.3228 21.1158 53.4321 21.0691 53.5336 21.0271C60.4349 18.1685 64.5861 18.9951 65.4119 20.9888C66.2377 22.982 63.4859 26.6683 56.9855 29.3609C56.8841 29.4029 56.7738 29.4472 56.6552 29.4936C56.7825 29.4911 56.9014 29.4898 57.0112 29.4898C64.4811 29.4898 68 31.8421 68 34C68.0002 36.1575 64.0471 38.5102 57.0112 38.5102C56.9014 38.5102 56.7825 38.5089 56.6551 38.5064C56.7738 38.5528 56.8841 38.5971 56.9855 38.6391C63.8869 41.4977 66.2377 45.0176 65.4119 47.0112C64.5864 49.0046 60.034 49.6654 53.5336 46.9729C53.4321 46.9309 53.3228 46.8842 53.2061 46.8331C53.298 46.9214 53.3829 47.0045 53.4606 47.0822C58.7426 52.3642 59.5675 56.5158 58.0416 58.0416C56.5161 59.5674 52.0573 58.4357 47.0822 53.4606C47.0045 53.3829 46.9214 53.298 46.8331 53.2061C46.8842 53.3228 46.9309 53.4321 46.9729 53.5336C49.8315 60.4349 49.0049 64.5861 47.0112 65.4119C45.018 66.2377 41.3317 63.4859 38.6391 56.9855C38.5971 56.8841 38.5528 56.7738 38.5064 56.6552C38.5089 56.7826 38.5102 56.9014 38.5102 57.0112C38.5102 64.4811 36.1579 68 34 68C31.8425 68.0002 29.4898 64.0471 29.4898 57.0112C29.4898 56.9014 29.4911 56.7825 29.4936 56.6551C29.4472 56.7738 29.4029 56.8841 29.3609 56.9855C26.5023 63.8869 22.9824 66.2377 20.9888 65.4119C18.9954 64.5864 18.3346 60.034 21.0271 53.5336C21.0691 53.4321 21.1158 53.3228 21.1669 53.2061C21.0786 53.298 20.9955 53.3829 20.9178 53.4606C15.6358 58.7426 11.4843 59.5675 9.95837 58.0416C8.43265 56.5161 9.56427 52.0573 14.5394 47.0822C14.6171 47.0045 14.702 46.9214 14.7939 46.8331C14.6772 46.8842 14.5679 46.9309 14.4664 46.9729C7.5651 49.8315 3.4139 49.0049 2.5881 47.0112C1.76229 45.018 4.51408 41.3317 11.0145 38.6391C11.1159 38.5971 11.2262 38.5528 11.3448 38.5064C11.2174 38.5089 11.0986 38.5102 10.9888 38.5102C3.51888 38.5102 0 36.1579 0 34C-0.000163914 31.8425 3.95286 29.4898 10.9888 29.4898C11.0986 29.4898 11.2175 29.4911 11.3448 29.4936C11.2262 29.4472 11.1159 29.4029 11.0144 29.3609C4.11313 26.5023 1.76228 22.9824 2.58808 20.9888C3.41358 18.9954 7.96602 18.3346 14.4664 21.0271C14.5679 21.0691 14.6772 21.1158 14.7939 21.1669C14.702 21.0786 14.6171 20.9955 14.5394 20.9178C9.25741 15.6358 8.43249 11.4843 9.95837 9.95837C11.4839 8.43265 15.9427 9.56427 20.9178 14.5394C20.9955 14.6171 21.0786 14.702 21.1669 14.7939C21.1158 14.6772 21.0691 14.5679 21.0271 14.4664C18.1685 7.5651 18.9951 3.4139 20.9887 2.5881C22.982 1.76229 26.6683 4.51408 29.3609 11.0145C29.4029 11.1159 29.4472 11.2262 29.4936 11.3449C29.4911 11.2175 29.4898 11.0986 29.4898 10.9888C29.4898 3.51888 31.8421 0 34 0C36.1575 -0.00016413 38.5102 3.95286 38.5102 10.9888Z"
				/>
			)}
			<path
				d="M38.5064 11.3448L37.5066 11.3249C37.497 11.8094 37.836 12.231 38.3113 12.3256C38.7866 12.4201 39.2612 12.1603 39.4377 11.709L38.5064 11.3448ZM38.6391 11.0145L39.563 11.3971L39.563 11.3971L38.6391 11.0145ZM47.0112 2.58809L46.6285 3.51197L46.6286 3.512L47.0112 2.58809ZM46.9729 14.4664L46.049 14.0837L46.049 14.0837L46.9729 14.4664ZM46.8331 14.7939L45.917 14.3929C45.7227 14.8368 45.8746 15.3562 46.2775 15.6254C46.6804 15.8946 47.2184 15.8362 47.5541 15.4868L46.8331 14.7939ZM47.0822 14.5394L47.7893 15.2465L47.7893 15.2465L47.0822 14.5394ZM58.0416 9.95836L57.3345 10.6655L57.3346 10.6655L58.0416 9.95836ZM53.2061 21.1669L52.5132 20.4459C52.1638 20.7816 52.1054 21.3196 52.3746 21.7225C52.6438 22.1254 53.1632 22.2773 53.6071 22.083L53.2061 21.1669ZM53.5336 21.0271L53.9163 21.951L53.9163 21.951L53.5336 21.0271ZM65.4119 20.9888L64.488 21.3714L64.4881 21.3715L65.4119 20.9888ZM56.9855 29.3609L56.6029 28.437L56.6029 28.437L56.9855 29.3609ZM56.6552 29.4936L56.2909 28.5623C55.8397 28.7388 55.5798 29.2134 55.6744 29.6887C55.7689 30.164 56.1906 30.503 56.675 30.4934L56.6552 29.4936ZM68 34L67 34L67 34.0001L68 34ZM56.6551 38.5064L56.675 37.5066C56.1906 37.497 55.7689 37.836 55.6744 38.3113C55.5798 38.7865 55.8396 39.2612 56.2909 39.4377L56.6551 38.5064ZM56.9855 38.6391L56.6028 39.563L56.6029 39.563L56.9855 38.6391ZM65.4119 47.0112L64.488 46.6286L64.488 46.6286L65.4119 47.0112ZM53.5336 46.9729L53.9163 46.049L53.9163 46.049L53.5336 46.9729ZM53.2061 46.8331L53.6071 45.917C53.1632 45.7227 52.6439 45.8747 52.3747 46.2776C52.1054 46.6805 52.1638 47.2184 52.5132 47.5542L53.2061 46.8331ZM58.0416 58.0416L57.3345 57.3345L57.3345 57.3346L58.0416 58.0416ZM46.8331 53.2061L47.5541 52.5132C47.2184 52.1638 46.6804 52.1054 46.2775 52.3746C45.8746 52.6438 45.7227 53.1632 45.917 53.6071L46.8331 53.2061ZM46.9729 53.5336L46.049 53.9163L46.049 53.9163L46.9729 53.5336ZM47.0112 65.4119L46.6285 64.488L46.6285 64.4881L47.0112 65.4119ZM38.6391 56.9855L39.563 56.6029L39.563 56.6029L38.6391 56.9855ZM38.5064 56.6552L39.4377 56.291C39.2612 55.8397 38.7866 55.5799 38.3113 55.6744C37.8361 55.769 37.497 56.1906 37.5066 56.6751L38.5064 56.6552ZM34 68L34 67L33.9999 67L34 68ZM29.4936 56.6551L30.4934 56.675C30.5031 56.1905 30.164 55.7689 29.6887 55.6743C29.2134 55.5798 28.7388 55.8396 28.5623 56.2909L29.4936 56.6551ZM29.3609 56.9855L30.2848 57.3682L30.2848 57.3682L29.3609 56.9855ZM20.9888 65.4119L21.3714 64.488L21.3714 64.488L20.9888 65.4119ZM21.0271 53.5336L20.1032 53.1509L20.1032 53.1509L21.0271 53.5336ZM21.1669 53.2061L22.083 53.6071C22.2773 53.1632 22.1254 52.6439 21.7225 52.3747C21.3196 52.1054 20.7816 52.1638 20.4459 52.5132L21.1669 53.2061ZM20.9178 53.4606L20.2107 52.7534L20.2107 52.7535L20.9178 53.4606ZM9.95837 58.0416L10.6655 57.3345L10.6654 57.3345L9.95837 58.0416ZM14.5394 47.0822L15.2465 47.7893L15.2465 47.7893L14.5394 47.0822ZM14.7939 46.8331L15.4868 47.5541C15.8362 47.2184 15.8946 46.6804 15.6254 46.2775C15.3562 45.8746 14.8368 45.7227 14.3929 45.917L14.7939 46.8331ZM14.4664 46.9729L14.8491 47.8968L14.8491 47.8968L14.4664 46.9729ZM2.5881 47.0112L3.51198 46.6286L3.51195 46.6285L2.5881 47.0112ZM11.0145 38.6391L10.6318 37.7152L10.6318 37.7152L11.0145 38.6391ZM11.3448 38.5064L11.709 39.4377C12.1603 39.2612 12.4201 38.7866 12.3256 38.3113C12.2311 37.8361 11.8094 37.497 11.3249 37.5066L11.3448 38.5064ZM0 34L1 34L1 33.9999L0 34ZM11.3448 29.4936L11.325 30.4934C11.8094 30.5031 12.2311 30.164 12.3256 29.6887C12.4202 29.2135 12.1604 28.7388 11.7091 28.5623L11.3448 29.4936ZM11.0144 29.3609L11.3971 28.437L11.3971 28.437L11.0144 29.3609ZM2.58808 20.9888L3.51196 21.3715L3.51199 21.3714L2.58808 20.9888ZM14.4664 21.0271L14.0837 21.951L14.0837 21.951L14.4664 21.0271ZM14.7939 21.1669L14.3929 22.083C14.8368 22.2773 15.3562 22.1254 15.6254 21.7225C15.8946 21.3196 15.8362 20.7816 15.4868 20.4459L14.7939 21.1669ZM14.5394 20.9178L13.8323 21.6249L13.8323 21.6249L14.5394 20.9178ZM9.95837 9.95837L10.6655 10.6655L10.6655 10.6654L9.95837 9.95837ZM20.9178 14.5394L21.6249 13.8323L21.6249 13.8323L20.9178 14.5394ZM21.1669 14.7939L20.4458 15.4868C20.7816 15.8361 21.3195 15.8945 21.7224 15.6253C22.1253 15.3561 22.2772 14.8368 22.0829 14.3929L21.1669 14.7939ZM21.0271 14.4664L20.1032 14.8491L20.1032 14.8491L21.0271 14.4664ZM20.9887 2.5881L21.3714 3.51198L21.3715 3.51195L20.9887 2.5881ZM29.3609 11.0145L28.437 11.3971L28.437 11.3971L29.3609 11.0145ZM29.4936 11.3449L28.5623 11.7091C28.7388 12.1604 29.2134 12.4202 29.6887 12.3257C30.1639 12.2311 30.503 11.8095 30.4934 11.325L29.4936 11.3449ZM34 0L34 1L34.0001 1L34 0ZM39.5062 11.3647C39.5088 11.2318 39.5102 11.1062 39.5102 10.9888H37.5102C37.5102 11.091 37.509 11.2031 37.5066 11.3249L39.5062 11.3647ZM37.7152 10.6318C37.6703 10.7403 37.6235 10.8568 37.5751 10.9806L39.4377 11.709C39.4821 11.5956 39.5239 11.4915 39.563 11.3971L37.7152 10.6318ZM47.3939 1.66421C45.8574 1.02777 44.0678 1.72185 42.478 3.16262C40.8461 4.64158 39.1791 7.09765 37.7152 10.6318L39.563 11.3971C40.9577 8.02994 42.48 5.85993 43.821 4.64459C45.2042 3.39106 46.1714 3.32261 46.6285 3.51197L47.3939 1.66421ZM47.8967 14.8491C49.2811 11.5069 49.8333 8.59777 49.7485 6.36131C49.6676 4.22449 48.9684 2.31625 47.3938 1.66418L46.6286 3.512C47.0474 3.68543 47.6753 4.46617 47.75 6.43703C47.8209 8.30827 47.3571 10.9256 46.049 14.0837L47.8967 14.8491ZM47.7492 15.1949C47.8025 15.0731 47.8518 14.9576 47.8968 14.8491L46.049 14.0837C46.0099 14.1781 45.9659 14.2813 45.917 14.3929L47.7492 15.1949ZM46.3751 13.8323C46.292 13.9154 46.2042 14.0051 46.112 14.101L47.5541 15.4868C47.6386 15.3989 47.717 15.3188 47.7893 15.2465L46.3751 13.8323ZM58.7487 9.25125C57.5727 8.07526 55.6538 8.03166 53.6336 8.75437C51.5599 9.49623 49.08 11.1274 46.3751 13.8323L47.7893 15.2465C50.3664 12.6694 52.6032 11.2471 54.3073 10.6375C56.0649 10.0087 56.9846 10.3156 57.3345 10.6655L58.7487 9.25125ZM54.1677 21.6249C56.7257 19.0669 58.3491 16.5905 59.1266 14.4919C59.8696 12.4867 59.9539 10.4562 58.7487 9.2512L57.3346 10.6655C57.6551 10.986 57.9365 11.9476 57.2512 13.797C56.6006 15.553 55.1706 17.7936 52.7535 20.2107L54.1677 21.6249ZM53.899 21.8879C53.9949 21.7958 54.0846 21.708 54.1677 21.6249L52.7535 20.2107C52.6812 20.283 52.6011 20.3614 52.5132 20.4459L53.899 21.8879ZM53.1509 20.1032C53.0424 20.1482 52.9269 20.1975 52.8051 20.2508L53.6071 22.083C53.7187 22.0341 53.8219 21.9901 53.9163 21.951L53.1509 20.1032ZM66.3358 20.6061C65.6993 19.0696 63.9431 18.2949 61.8002 18.1895C59.6005 18.0814 56.685 18.6394 53.1509 20.1032L53.9163 21.951C57.2835 20.5563 59.8943 20.0982 61.702 20.1871C63.5664 20.2788 64.2987 20.9143 64.488 21.3714L66.3358 20.6061ZM57.3682 30.2848C60.7105 28.9004 63.1579 27.2337 64.6794 25.5924C66.1331 24.0242 66.9881 22.1805 66.3358 20.606L64.4881 21.3715C64.6616 21.7903 64.5535 22.7863 63.2127 24.2328C61.9396 25.606 59.761 27.1289 56.6029 28.437L57.3682 30.2848ZM57.0194 30.4249C57.1432 30.3765 57.2597 30.3297 57.3682 30.2848L56.6029 28.437C56.5085 28.4761 56.4044 28.5179 56.2909 28.5623L57.0194 30.4249ZM57.0112 28.4898C56.8938 28.4898 56.7682 28.4912 56.6353 28.4938L56.675 30.4934C56.7969 30.491 56.909 30.4898 57.0112 30.4898V28.4898ZM69 34C69 32.3369 67.6739 30.9491 65.7344 30.0317C63.7435 29.09 60.8365 28.4898 57.0112 28.4898V30.4898C60.6558 30.4898 63.2432 31.0658 64.8792 31.8396C66.5667 32.6378 67 33.5052 67 34H69ZM57.0112 39.5102C60.6288 39.5102 63.5277 38.907 65.5615 37.9729C67.5047 37.0804 69.0001 35.7042 69 33.9999L67 34.0001C67 34.4534 66.519 35.3322 64.7268 36.1554C63.0251 36.937 60.4295 37.5102 57.0112 37.5102V39.5102ZM56.6353 39.5062C56.7682 39.5088 56.8937 39.5102 57.0112 39.5102V37.5102C56.909 37.5102 56.7969 37.509 56.675 37.5066L56.6353 39.5062ZM57.3682 37.7152C57.2597 37.6703 57.1432 37.6235 57.0194 37.5751L56.2909 39.4377C56.4044 39.4821 56.5085 39.5239 56.6028 39.563L57.3682 37.7152ZM66.3358 47.3939C66.9722 45.8574 66.2781 44.0678 64.8374 42.478C63.3584 40.8461 60.9023 39.1791 57.3682 37.7152L56.6029 39.563C59.9701 40.9577 62.1401 42.48 63.3554 43.8211C64.6089 45.2042 64.6774 46.1714 64.488 46.6286L66.3358 47.3939ZM53.1509 47.8968C56.4931 49.2812 59.4022 49.8333 61.6387 49.7486C63.7755 49.6676 65.6837 48.9684 66.3358 47.3938L64.488 46.6286C64.3146 47.0474 63.5338 47.6753 61.563 47.75C59.6917 47.8209 57.0744 47.3572 53.9163 46.049L53.1509 47.8968ZM52.8051 47.7492C52.9269 47.8025 53.0424 47.8518 53.1509 47.8968L53.9163 46.049C53.8219 46.0099 53.7187 45.9659 53.6071 45.917L52.8051 47.7492ZM54.1677 46.3751C54.0846 46.292 53.9949 46.2042 53.899 46.1121L52.5132 47.5542C52.6011 47.6386 52.6812 47.717 52.7535 47.7893L54.1677 46.3751ZM58.7487 58.7487C59.9247 57.5727 59.9683 55.6538 59.2456 53.6336C58.5038 51.5599 56.8726 49.08 54.1677 46.3751L52.7535 47.7893C55.3306 50.3664 56.7529 52.6032 57.3625 54.3073C57.9913 56.0649 57.6844 56.9846 57.3345 57.3345L58.7487 58.7487ZM46.3751 54.1677C48.9331 56.7257 51.4095 58.3491 53.5081 59.1266C55.5133 59.8696 57.5438 59.9539 58.7488 58.7487L57.3345 57.3346C57.014 57.6551 56.0524 57.9365 54.203 57.2512C52.447 56.6006 50.2064 55.1706 47.7893 52.7535L46.3751 54.1677ZM46.1121 53.899C46.2042 53.9949 46.292 54.0846 46.3751 54.1677L47.7893 52.7535C47.717 52.6812 47.6386 52.6011 47.5541 52.5132L46.1121 53.899ZM47.8968 53.1509C47.8518 53.0424 47.8025 52.9269 47.7492 52.8051L45.917 53.6071C45.9659 53.7187 46.0099 53.8219 46.049 53.9163L47.8968 53.1509ZM47.3939 66.3358C48.9304 65.6993 49.7051 63.9431 49.8105 61.8002C49.9186 59.6005 49.3606 56.685 47.8968 53.1509L46.049 53.9163C47.4437 57.2835 47.9018 59.8943 47.8129 61.702C47.7212 63.5664 47.0857 64.2987 46.6285 64.488L47.3939 66.3358ZM37.7152 57.3682C39.0996 60.7105 40.7663 63.1579 42.4076 64.6794C43.9758 66.1331 45.8195 66.9881 47.394 66.3358L46.6285 64.4881C46.2097 64.6616 45.2137 64.5535 43.7672 63.2127C42.394 61.9396 40.8711 59.761 39.563 56.6029L37.7152 57.3682ZM37.5751 57.0195C37.6235 57.1432 37.6703 57.2597 37.7152 57.3682L39.563 56.6029C39.5239 56.5085 39.4821 56.4044 39.4377 56.291L37.5751 57.0195ZM39.5102 57.0112C39.5102 56.8938 39.5088 56.7682 39.5062 56.6353L37.5066 56.6751C37.509 56.7969 37.5102 56.909 37.5102 57.0112H39.5102ZM34 69C35.6631 69 37.0509 67.6739 37.9683 65.7344C38.91 63.7435 39.5102 60.8365 39.5102 57.0112H37.5102C37.5102 60.6558 36.9342 63.2432 36.1604 64.8792C35.3622 66.5667 34.4948 67 34 67V69ZM28.4898 57.0112C28.4898 60.6288 29.093 63.5277 30.0271 65.5615C30.9196 67.5047 32.2958 69.0001 34.0001 69L33.9999 67C33.5466 67 32.6678 66.519 31.8446 64.7268C31.063 63.0251 30.4898 60.4295 30.4898 57.0112H28.4898ZM28.4938 56.6352C28.4912 56.7682 28.4898 56.8937 28.4898 57.0112H30.4898C30.4898 56.909 30.491 56.7969 30.4934 56.675L28.4938 56.6352ZM30.2848 57.3682C30.3297 57.2597 30.3765 57.1432 30.4249 57.0194L28.5623 56.2909C28.5179 56.4044 28.4761 56.5084 28.437 56.6029L30.2848 57.3682ZM20.6061 66.3358C22.1426 66.9722 23.9322 66.2781 25.522 64.8374C27.1539 63.3584 28.8209 60.9023 30.2848 57.3682L28.437 56.6029C27.0423 59.9701 25.52 62.1401 24.1789 63.3554C22.7958 64.6089 21.8286 64.6774 21.3714 64.488L20.6061 66.3358ZM20.1032 53.1509C18.7188 56.4931 18.1667 59.4022 18.2514 61.6387C18.3324 63.7755 19.0316 65.6837 20.6062 66.3358L21.3714 64.488C20.9526 64.3146 20.3247 63.5338 20.25 61.563C20.1791 59.6917 20.6428 57.0744 21.951 53.9163L20.1032 53.1509ZM20.2508 52.8051C20.1975 52.9269 20.1482 53.0424 20.1032 53.1509L21.951 53.9163C21.9901 53.8219 22.0341 53.7187 22.083 53.6071L20.2508 52.8051ZM21.6249 54.1677C21.708 54.0846 21.7958 53.9949 21.8879 53.899L20.4459 52.5132C20.3614 52.6011 20.283 52.6812 20.2107 52.7534L21.6249 54.1677ZM9.25127 58.7487C10.4273 59.9247 12.3462 59.9683 14.3664 59.2456C16.4401 58.5038 18.92 56.8726 21.6249 54.1677L20.2107 52.7535C17.6336 55.3306 15.3968 56.7529 13.6927 57.3625C11.9351 57.9913 11.0154 57.6844 10.6655 57.3345L9.25127 58.7487ZM13.8323 46.3751C11.2743 48.9331 9.65094 51.4095 8.87337 53.5081C8.13043 55.5133 8.04615 57.5438 9.25132 58.7488L10.6654 57.3345C10.3449 57.014 10.0635 56.0524 10.7488 54.203C11.3994 52.447 12.8294 50.2064 15.2465 47.7893L13.8323 46.3751ZM14.101 46.1121C14.0051 46.2042 13.9154 46.292 13.8323 46.3751L15.2465 47.7893C15.3188 47.717 15.3989 47.6386 15.4868 47.5541L14.101 46.1121ZM14.8491 47.8968C14.9576 47.8518 15.0731 47.8025 15.1949 47.7492L14.3929 45.917C14.2813 45.9659 14.1781 46.0099 14.0837 46.049L14.8491 47.8968ZM1.66422 47.3939C2.30066 48.9304 4.05689 49.7051 6.19982 49.8105C8.39955 49.9186 11.315 49.3606 14.8491 47.8968L14.0837 46.049C10.7165 47.4437 8.1057 47.9018 6.29805 47.8129C4.43361 47.7212 3.70134 47.0857 3.51198 46.6286L1.66422 47.3939ZM10.6318 37.7152C7.28954 39.0996 4.84209 40.7663 3.32059 42.4076C1.86687 43.9758 1.01194 45.8195 1.66425 47.394L3.51195 46.6285C3.33845 46.2097 3.44651 45.2137 4.78733 43.7672C6.06036 42.394 8.23899 40.8711 11.3971 39.563L10.6318 37.7152ZM10.9806 37.5751C10.8568 37.6235 10.7403 37.6703 10.6318 37.7152L11.3971 39.563C11.4915 39.5239 11.5956 39.4821 11.709 39.4377L10.9806 37.5751ZM11.3249 37.5066C11.2031 37.509 11.091 37.5102 10.9888 37.5102V39.5102C11.1062 39.5102 11.2318 39.5088 11.3647 39.5062L11.3249 37.5066ZM10.9888 37.5102C7.34419 37.5102 4.75682 36.9342 3.12078 36.1604C1.43335 35.3622 1 34.4948 1 34H-1C-1 35.6631 0.326095 37.0509 2.26559 37.9683C4.25648 38.91 7.16351 39.5102 10.9888 39.5102V37.5102ZM1 33.9999C0.999966 33.5466 1.48098 32.6678 3.27325 31.8446C4.97491 31.063 7.57046 30.4898 10.9888 30.4898V28.4898C7.37121 28.4898 4.47227 29.093 2.43848 30.0271C0.495285 30.9196 -1.00013 32.2958 -1 34.0001L1 33.9999ZM10.9888 30.4898C11.091 30.4898 11.2031 30.491 11.325 30.4934L11.3647 28.4938C11.2318 28.4912 11.1063 28.4898 10.9888 28.4898V30.4898ZM10.6318 30.2848C10.7403 30.3297 10.8568 30.3765 10.9806 30.4249L11.7091 28.5623C11.5956 28.5179 11.4915 28.4761 11.3971 28.437L10.6318 30.2848ZM1.6642 20.6061C1.02776 22.1426 1.72184 23.9322 3.16261 25.522C4.64156 27.1539 7.09764 28.8209 10.6318 30.2848L11.3971 28.437C8.02993 27.0423 5.85992 25.52 4.64457 24.1789C3.39104 22.7958 3.3226 21.8286 3.51196 21.3715L1.6642 20.6061ZM14.8491 20.1032C11.5069 18.7188 8.59776 18.1667 6.3613 18.2514C4.22448 18.3324 2.31624 19.0316 1.66417 20.6062L3.51199 21.3714C3.68542 20.9526 4.46616 20.3247 6.43702 20.25C8.30825 20.1791 10.9256 20.6428 14.0837 21.951L14.8491 20.1032ZM15.1949 20.2508C15.0731 20.1975 14.9576 20.1482 14.8491 20.1032L14.0837 21.951C14.1781 21.9901 14.2813 22.0341 14.3929 22.083L15.1949 20.2508ZM13.8323 21.6249C13.9154 21.708 14.0051 21.7958 14.101 21.8879L15.4868 20.4459C15.399 20.3614 15.3188 20.283 15.2465 20.2107L13.8323 21.6249ZM9.25127 9.25126C8.07527 10.4273 8.03167 12.3462 8.75438 14.3664C9.49624 16.4401 11.1274 18.92 13.8323 21.6249L15.2466 20.2107C12.6694 17.6336 11.2471 15.3968 10.6375 13.6927C10.0087 11.9351 10.3156 11.0154 10.6655 10.6655L9.25127 9.25126ZM21.6249 13.8323C19.0669 11.2743 16.5905 9.65094 14.4919 8.87337C12.4868 8.13043 10.4562 8.04615 9.25121 9.25132L10.6655 10.6654C10.986 10.3449 11.9476 10.0635 13.797 10.7488C15.553 11.3994 17.7936 12.8294 20.2107 15.2465L21.6249 13.8323ZM21.8879 14.1009C21.7958 14.0051 21.708 13.9154 21.6249 13.8323L20.2107 15.2465C20.283 15.3188 20.3614 15.3989 20.4458 15.4868L21.8879 14.1009ZM20.1032 14.8491C20.1482 14.9576 20.1975 15.073 20.2508 15.1948L22.0829 14.3929C22.0341 14.2813 21.9901 14.1781 21.951 14.0837L20.1032 14.8491ZM20.6061 1.66422C19.0696 2.30066 18.2949 4.05689 18.1895 6.19982C18.0814 8.39955 18.6393 11.315 20.1032 14.8491L21.951 14.0837C20.5562 10.7165 20.0982 8.1057 20.1871 6.29805C20.2788 4.43361 20.9143 3.70134 21.3714 3.51198L20.6061 1.66422ZM30.2848 10.6318C28.9004 7.28954 27.2337 4.84209 25.5924 3.32059C24.0242 1.86687 22.1805 1.01194 20.606 1.66425L21.3715 3.51195C21.7903 3.33845 22.7863 3.44651 24.2327 4.78733C25.606 6.06036 27.1288 8.23899 28.437 11.3971L30.2848 10.6318ZM30.4249 10.9806C30.3765 10.8568 30.3297 10.7403 30.2848 10.6318L28.437 11.3971C28.4761 11.4915 28.5179 11.5956 28.5623 11.7091L30.4249 10.9806ZM28.4898 10.9888C28.4898 11.1063 28.4912 11.2318 28.4938 11.3648L30.4934 11.325C30.491 11.2032 30.4898 11.091 30.4898 10.9888H28.4898ZM34 -1C32.3369 -1 30.9491 0.326095 30.0317 2.26559C29.09 4.25648 28.4898 7.16351 28.4898 10.9888H30.4898C30.4898 7.34419 31.0658 4.75682 31.8396 3.12078C32.6378 1.43335 33.5052 1 34 1V-1ZM39.5102 10.9888C39.5102 7.37121 38.907 4.47227 37.9729 2.43848C37.0804 0.495284 35.7042 -1.00013 33.9999 -1L34.0001 1C34.4534 0.999966 35.3322 1.48098 36.1554 3.27325C36.937 4.97491 37.5102 7.57046 37.5102 10.9888H39.5102Z"
				fill={fillColor ? undefined : color}
				mask="url(#path-1-inside-1_95_2051)"
			/>
		</svg>
	);
}

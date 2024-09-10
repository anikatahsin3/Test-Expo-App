import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image, G } from "react-native-svg";

const SVG = {};
SVG["SPOTFAME_LOGO"] = (props) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={26}
		height={28}
		fill="none"
		{...props}
	>
		<Path fill="url(#a)" d="M0 .641h25.234V27.36H0z" />
		<Defs>
			<Pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
				<Use xlinkHref="#b" transform="matrix(.0126 0 0 .0119 -.004 0)" />
			</Pattern>
			<Image
				xlinkHref="data:image/jpeg;base64,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"
				id="b"
				width={80}
				height={84}
			/>
		</Defs>
	</Svg>
);

SVG["OFFICE_CHAIR"] = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeWidth={2}
			d="M21.333 29.333c-1.421-1.66-3.288-2.666-5.333-2.666-2.045 0-3.912 1.007-5.333 2.666M16 17.333c-1.69 0-3.479.293-4.88.684-1.055.295-1.904 1.638-1.773 2.73.048.403.396.586.762.586h11.782c.366 0 .714-.183.762-.587.131-1.09-.718-2.434-1.773-2.729-1.401-.391-3.19-.684-4.88-.684Z"
		/>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M28 13.333A2.667 2.667 0 0 0 25.333 16v1.333A2.667 2.667 0 0 1 22.667 20M4 13.333A2.667 2.667 0 0 1 6.667 16v1.333A2.667 2.667 0 0 0 9.333 20M16 21.333v8M17.093 13.333h-2.186c-1.87 0-2.804 0-3.48-.564-.677-.565-.903-1.535-1.357-3.475C9.357 6.243 9 4.718 9.75 3.692c.748-1.025 2.218-1.025 5.157-1.025h2.186c2.94 0 4.41 0 5.158 1.025.748 1.026.392 2.551-.321 5.602-.454 1.94-.68 2.91-1.357 3.475-.676.564-1.61.564-3.48.564ZM16 13.333v4"
		/>
	</Svg>
);

SVG["COMPUTER_DOLLAR"] = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeWidth={2}
			d="m19.833 29.333-.42-.558c-.949-1.26-1.184-3.182-.584-4.775M13.167 29.333l.42-.558c.949-1.26 1.184-3.182.584-4.775M9.833 29.333h13.334M16.5 9.333c-1.473 0-2.667.896-2.667 2 0 1.105 1.194 2 2.667 2 1.473 0 2.667.896 2.667 2 0 1.105-1.194 2-2.667 2m0-8c1.161 0 2.149.557 2.515 1.334M16.5 9.333V8m0 9.333c-1.161 0-2.149-.556-2.515-1.333m2.515 1.333v1.334"
		/>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeWidth={2}
			d="M19.167 2.667h-5.334c-4.372 0-6.558 0-8.108 1.085a6 6 0 0 0-1.473 1.473c-1.085 1.55-1.085 3.736-1.085 8.108 0 4.373 0 6.559 1.085 8.109a6 6 0 0 0 1.473 1.473C7.275 24 9.461 24 13.833 24h5.334c4.372 0 6.558 0 8.108-1.085a6.001 6.001 0 0 0 1.473-1.473c1.085-1.55 1.085-3.736 1.085-8.109 0-4.372 0-6.558-1.085-8.108a6.001 6.001 0 0 0-1.473-1.473c-1.55-1.085-3.736-1.085-8.108-1.085Z"
		/>
	</Svg>
);

SVG["SHIRT_01"] = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeWidth={2}
			d="M8 12v10.245c0 2.415 0 3.623.781 4.373 1.752 1.683 12.36 1.996 14.438 0 .781-.75.781-1.958.781-4.372V12"
		/>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m7.654 16-3.596-3.481c-.928-.898-1.391-1.346-1.391-1.904 0-.558.463-1.006 1.39-1.904L6.727 6.13c.462-.448.693-.671.969-.836.275-.165.585-.265 1.205-.465l2.195-.708c.32-.104.481-.155.59-.093.11.062.144.241.213.6.36 1.875 2.06 3.295 4.102 3.295 2.042 0 3.742-1.42 4.102-3.295.07-.359.104-.538.213-.6.109-.062.27-.01.59.093l2.195.708c.62.2.93.3 1.205.465.276.165.507.388.97.836l2.667 2.582c.928.898 1.391 1.346 1.391 1.904 0 .558-.463 1.006-1.39 1.904L24.345 16"
		/>
	</Svg>
);

SVG["DASHBOARD_BROWSING"] = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeWidth={2}
			d="M3.833 16c0-5.971 0-8.957 1.855-10.812 1.855-1.855 4.84-1.855 10.812-1.855 5.971 0 8.957 0 10.812 1.855 1.855 1.855 1.855 4.84 1.855 10.812 0 5.971 0 8.957-1.855 10.812-1.855 1.855-4.84 1.855-10.812 1.855-5.971 0-8.957 0-10.812-1.855C3.833 24.957 3.833 21.972 3.833 16Z"
		/>
		<Path stroke="#000" strokeLinejoin="round" strokeWidth={2} d="M3.833 12h25.334" />
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2.667}
			d="M9.833 8h.012M15.166 8h.012"
		/>
		<Path stroke="#000" strokeLinecap="round" strokeWidth={2} d="M23.167 22.667a6.667 6.667 0 0 0-13.334 0" />
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="m17.443 20.39-1.886 1.886"
		/>
	</Svg>
);

SVG["ALIGN_BOX_TOP_LEFT"] = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M4.5 14.667c0-5 0-7.5 1.273-9.252A6.667 6.667 0 0 1 7.248 3.94C9.001 2.667 11.5 2.667 16.5 2.667c5 0 7.5 0 9.252 1.273a6.666 6.666 0 0 1 1.475 1.475C28.5 7.167 28.5 9.667 28.5 14.667v2.666c0 5 0 7.5-1.273 9.252a6.665 6.665 0 0 1-1.475 1.475C24 29.333 21.5 29.333 16.5 29.333c-5 0-7.5 0-9.252-1.273a6.666 6.666 0 0 1-1.475-1.475C4.5 24.833 4.5 22.333 4.5 17.333v-2.666ZM20.5 9.333H9.833m4 6.667h-4"
		/>
	</Svg>
);

SVG["HOME"] = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
		<G strokeWidth={1.5}>
			<Path
				stroke="#141B34"
				d="m9 22 .002-4.002c0-.931 0-1.396.153-1.763a2 2 0 0 1 1.083-1.083C10.605 15 11.07 15 12 15c.93 0 1.396 0 1.764.152a2 2 0 0 1 1.083 1.083C15 16.603 15 17.068 15 18V22"
			/>
			<Path
				stroke="#000"
				strokeLinejoin="round"
				d="m7.088 4.762-1 .781c-1.516 1.184-2.275 1.776-2.681 2.61C3 8.988 3 9.952 3 11.88v2.091c0 3.785 0 5.677 1.172 6.853C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.176C21 19.648 21 17.756 21 13.971v-2.09c0-1.929 0-2.893-.407-3.728-.407-.834-1.165-1.426-2.681-2.61l-1-.78C14.552 2.92 13.372 2 12 2c-1.372 0-2.552.92-4.912 2.762Z"
			/>
		</G>
	</Svg>
);

SVG["HOME_SELECTED"] = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
		<Path
			fill="#007AFF"
			d="m7.088 4.762-1 .781c-1.516 1.184-2.275 1.776-2.681 2.61C3 8.988 3 9.952 3 11.88v2.091c0 3.785 0 5.677 1.172 6.853C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.176C21 19.648 21 17.756 21 13.971v-2.09c0-1.929 0-2.893-.407-3.728-.407-.834-1.165-1.426-2.681-2.61l-1-.78C14.552 2.92 13.372 2 12 2c-1.372 0-2.552.92-4.912 2.762Z"
		/>
		<Path
			stroke="#fff"
			strokeWidth={1.5}
			d="m9 22 .002-4.002c0-.931 0-1.396.153-1.763a2 2 0 0 1 1.083-1.083C10.605 15 11.07 15 12 15c.93 0 1.396 0 1.764.152a2 2 0 0 1 1.083 1.083C15 16.603 15 17.068 15 18V22"
		/>
	</Svg>
);

SVG["USER_CIRCLE"] = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
		<Path
			stroke="#000"
			strokeWidth={1.5}
			d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
		/>
		<Path
			stroke="#000"
			strokeLinecap="round"
			strokeWidth={1.5}
			d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.502 2.502 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.502 2.502 0 0 1 2.503 2.5Z"
		/>
	</Svg>
);

SVG["USER_CIRCLE_SELECTED"] = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
		<Path fill="#007AFF" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
		<Path
			stroke="#fff"
			strokeLinecap="round"
			strokeWidth={1.5}
			d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.502 2.502 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.502 2.502 0 0 1 2.503 2.5Z"
		/>
	</Svg>
);

export default SVG;

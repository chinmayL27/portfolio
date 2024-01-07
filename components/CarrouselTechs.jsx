import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { useTheme } from "styled-components";

import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { GoogleCloud } from "@styled-icons/boxicons-logos/GoogleCloud";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Postgresql } from "@styled-icons/simple-icons/Postgresql";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Java } from "@styled-icons/fa-brands/Java";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Cplusplus } from "@styled-icons/simple-icons/Cplusplus";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Flutter } from "@styled-icons/boxicons-logos/Flutter";
import { Django } from "@styled-icons/boxicons-logos/Django";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Wireshark } from "@styled-icons/simple-icons/Wireshark";
import { Netlify } from "@styled-icons/simple-icons/Netlify";
import { Materialui } from "@styled-icons/simple-icons/Materialui";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Owasp } from "@styled-icons/simple-icons/Owasp";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Security } from "@styled-icons/material/Security";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Api } from "@styled-icons/material-rounded/Api";
import { Vmware } from "@styled-icons/simple-icons/Vmware";
import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";
import { TailwindCss } from "@styled-icons/boxicons-logos/TailwindCss";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Windows } from "@styled-icons/boxicons-logos/Windows";
import { Android } from "@styled-icons/boxicons-logos/Android";
import { Ios } from "@styled-icons/simple-icons/Ios";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Database } from "@styled-icons/fa-solid/Database";
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { Gnubash } from "@styled-icons/simple-icons/Gnubash";
import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
import { Kalilinux } from "@styled-icons/simple-icons/Kalilinux";

const Carrousel = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	width: 100%;
	margin-top: 5px;
	margin-bottom: 5px;

	.slide {
		margin: 10px;
	}

	.slide svg {
		width: 78px;
		height: 78px;
		color: ${(props) => (props.colorIcon == "brand" ? props.theme.colors.branding : props.theme.colors.backgroundSecondary)};
		transition: all 0.3s ease;
	}

	.slide svg:hover {
		color: ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 1200px) {
		.slide svg {
			width: 58px;
			height: 58px;
		}
	}

	@media (max-width: 600px) {
		.slide svg {
			width: 38px;
			height: 38px;
		}
	}
`;

export default function CarrouselTechs(props) {
	const theme = useTheme();

	const { direction, colorIcon } = props;

	return (
		<Marquee autoFill gradient loop={0} gradientColor={theme.colors.backgroundPageRgb} direction={direction}>
			<Carrousel colorIcon={colorIcon}>
				<div className="slide">
					<Gnubash />
				</div>
				<div className="slide">
					<Owasp />
				</div>
				<div className="slide">
					<Visualstudiocode />
				</div>
				<div className="slide">
					<Kalilinux />
				</div>
				<div className="slide">
					<Vmware />
				</div>
				<div className="slide">
					<Amazonaws />
				</div>
				<div className="slide">
					<GoogleCloud />
				</div>
				<div className="slide">
					<Firebase />
				</div>
				<div className="slide">
					<Mongodb />
				</div>
				<div className="slide">
					<Postgresql />
				</div>
				<div className="slide">
					<Sqlite />
				</div>
				<div className="slide">
					<Javascript />
				</div>
				<div className="slide">
					<Java />
				</div>
				<div className="slide">
					<ReactLogo />
				</div>
				<div className="slide">
					<Cplusplus />
				</div>
				<div className="slide">
					<Python />
				</div>
				<div className="slide">
					<Flutter />
				</div>
				<div className="slide">
					<Django />
				</div>
				<div className="slide">
					<Nodejs />
				</div>
				<div className="slide">
					<Wireshark />
				</div>
				<div className="slide">
					<Netlify />
				</div>
				<div className="slide">
					<Materialui />
				</div>
				<div className="slide">
					<Styledcomponents />
				</div>
				<div className="slide">
					<Css3 />
				</div>
				<div className="slide">
					<Html5 />
				</div>
				<div className="slide">
					<Git />
				</div>
				<div className="slide">
					<Security />
				</div>
				<div className="slide">
					<GithubOutline />
				</div>
				<div className="slide">
					<Api />
				</div>
				<div className="slide">
					<Bootstrap />
				</div>
				<div className="slide">
					<TailwindCss />
				</div>
				<div className="slide">
					<Mysql />
				</div>
				<div className="slide">
					<Linux />
				</div>
				<div className="slide">
					<Windows />
				</div>
				<div className="slide">
					<Android />
				</div>
				<div className="slide">
					<Ios />
				</div>
				<div className="slide">
					<Typescript />
				</div>
				<div className="slide">
					<Sass />
				</div>
				<div className="slide">
					<Database />
				</div>
				<div className="slide">
					<Figma />
				</div>
			</Carrousel>
		</Marquee>
	);
}

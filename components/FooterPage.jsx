import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Custom components
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";

//Ícones
import { KeyboardArrowUp } from "@styled-icons/material-outlined/KeyboardArrowUp";

const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	margin-top: 60px;

	#grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20px;
		grid-row-gap: 0px;
		transition: all 0.3s ease;
		width: 60%;
		text-align: center;

		@media (max-width: 1200px) {
			width: 80%;
		}

		@media (max-width: 1000px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (max-width: 800px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 601px) {
			width: 100%;
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

const Divider = styled.div`
	width: 100%;
	border-top: 1px solid ${(props) => props.theme.colors.backgroundSecondary};
	margin-top: 20px;
`;

const SectionFooterMenu = styled.div`
	display: flex;
	align-content: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	height: 100%;
	//border: 1px solid #000;
	padding: 5px;
`;

const FooterTextTitle = styled.h4`
	font-weight: 800;
	color: ${(props) => props.theme.colors.branding};
`;

const FooterText = styled.span`
	position: relative;
	font-weight: 400;
	font-size: 14px;
	color: ${(props) => props.theme.colors.subtitle};
	transition: all 0.3s ease;
	margin-top: 3px;
	margin-bottom: 3px;
	text-transform: capitalize;

	&:hover {
		cursor: pointer;
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		height: 2px;
		background-color: ${(props) => props.theme.colors.branding};
		transform: scaleX(0);
		transition: transform 0.5s ease;
	}

	&::before {
		top: 0;
		transform-origin: center right;
	}

	&:hover::before {
		transform-origin: center left;
		transform: scaleX(1);
	}

	&::after {
		bottom: 0;
		transform-origin: center left;
	}

	&:hover::after {
		transform-origin: center right;
		transform: scaleX(1);
	}
`;

const FooterTextExternalLink = styled.a`
	position: relative;
	font-weight: 400;
	font-size: 14px;
	color: ${(props) => props.theme.colors.subtitle};
	transition: all 0.3s ease;
	margin-top: 3px;
	margin-bottom: 3px;
	text-decoration: none;

	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		height: 2px;
		background-color: ${(props) => props.theme.colors.branding};
		transform: scaleX(0);
		transition: transform 0.5s ease;
	}

	&::before {
		top: 0;
		transform-origin: center right;
	}

	&:hover::before {
		transform-origin: center left;
		transform: scaleX(1);
	}

	&::after {
		bottom: 0;
		transform-origin: center left;
	}

	&:hover::after {
		transform-origin: center right;
		transform: scaleX(1);
	}
`;

const TextBuildProject = styled.h4`
	font-weight: 800;
	color: ${(props) => props.theme.colors.branding};
	font-size: 14px;

	span {
		font-weight: 400;
	}
`;

const ContainerBuildCopyright = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	transition: all 0.3s ease;
	width: 60%;
	margin-top: 20px;
	margin-bottom: 20px;

	.build-and-button-top {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 1200px) {
		width: 80%;
	}

	@media (max-width: 601px) {
		flex-direction: column;
		margin-bottom: 110px;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const ButtonUpToTop = styled.div`
	/* position: fixed; */
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	width: 32px;
	height: 32px;
	bottom: 20px;
	right: 20px;
	z-index: 1;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	transition: all 0.3s ease;
	margin-left: 15px;

	&:hover {
		cursor: pointer;
		//transform: translateY(-7px);
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 24px;
		height: 24px;
	}
`;

export default function FooterPage(props) {
	const { language } = useContext(SettingsContext);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<FooterContainer>
			<div id="grid">
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<SectionFooterMenu>
						<FooterTextTitle>{language.footer.labelNavigation.title}</FooterTextTitle>
						<Link href="#section-home" passHref>
							<FooterText>{language.footer.labelNavigation.labelHome}</FooterText>
						</Link>
						<Link href="#section-sobre-mim" passHref>
							<FooterText>{language.footer.labelNavigation.labelAboutMe}</FooterText>
						</Link>
						<Link href="#section-portifolio" passHref>
							<FooterText>{language.footer.labelNavigation.labelPortifolio}</FooterText>
						</Link>
						<Link href="#section-experiencia" passHref>
							<FooterText>{language.footer.labelNavigation.labelExperience}</FooterText>
						</Link>
						{/* <Link href="#section-achievements" passHref>
							<FooterText>{language.footer.labelNavigation.labelAchievements}</FooterText>
						</Link> */}
					</SectionFooterMenu>
				</ScrollAnimation>

				{/* <ScrollAnimation animateIn="fadeIn" animateOnce delay={200}>
					<SectionFooterMenu>
						<FooterTextTitle>{language.footer.labelHost.title}</FooterTextTitle>

						<FooterTextExternalLink href="https://vercel.com/" target="_blank">
							Vercel
						</FooterTextExternalLink>
					</SectionFooterMenu>
				</ScrollAnimation> */}

				<ScrollAnimation animateIn="fadeIn" animateOnce delay={400}>
					<SectionFooterMenu>
						<FooterTextTitle>{language.footer.labelSourceCode.title}</FooterTextTitle>
						<FooterTextExternalLink href="https://github.com/chinmayL27/" target="_blank">
							Github
						</FooterTextExternalLink>
						<FooterTextExternalLink href="https://kaggle.com/chinmay2711/" target="_blank">
							Kaggle
						</FooterTextExternalLink>
					</SectionFooterMenu>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeIn" animateOnce delay={600}>
					<SectionFooterMenu>
						<FooterTextTitle>{language.footer.labelTechs.title}</FooterTextTitle>

						<FooterTextExternalLink href="https://www.hackerrank.com/profile/chinmay_l19" target="_blank">
							HackerRank
						</FooterTextExternalLink>

						<FooterTextExternalLink href="https://leetcode.com/chinmayL2711/" target="_blank">
							CodeChef
						</FooterTextExternalLink>

						<FooterTextExternalLink href="https://codeforces.com/profile/golden_hunter" target="_blank">
							CodeForces
						</FooterTextExternalLink>
					</SectionFooterMenu>
				</ScrollAnimation>
				{/* 
				<ScrollAnimation animateIn="fadeIn" animateOnce delay={800}>
					<SectionFooterMenu>
						<FooterTextTitle>{language.footer.labelStats.title}</FooterTextTitle>

						<FooterTextExternalLink href="https://analytics.umami.is/share/6fxpADR03bK8xSHp/web%20portfolio" target="_blank">
							{language.footer.labelStats.stats}
						</FooterTextExternalLink>
					</SectionFooterMenu>
				</ScrollAnimation> */}
			</div>
			<Divider />
			<ContainerBuildCopyright>
				<SocialNetworkRowStack />
				<div className="build-and-button-top">
					{/* <TextBuildProject>
						{language.footer.labelBuildVersion}: {commit || ""}
					</TextBuildProject> */}
					<ButtonUpToTop onClick={goToTop}>
						<KeyboardArrowUp />
					</ButtonUpToTop>
				</div>
			</ContainerBuildCopyright>
		</FooterContainer>
	);
}

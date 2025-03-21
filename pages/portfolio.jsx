import React, { useRef, useState, useContext } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Styled-components
import { TitleSection, ContainerTitleSection, BodyText } from "@/styles/ui";

//Ícones
import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { GoogleCloud } from "@styled-icons/boxicons-logos/GoogleCloud";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Expo } from "@styled-icons/simple-icons/Expo";
import { Jest } from "@styled-icons/simple-icons/Jest";
import { Filter } from "@styled-icons/fa-solid/Filter";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Live } from "@styled-icons/fluentui-system-filled/Live";

//Custom components
import Tooltip from "@/components/Tooltip";
import { LogoPython } from "styled-icons/ionicons-solid";
import { Security } from "styled-icons/material";
import { Kaggle } from "styled-icons/simple-icons";

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;
	grid-auto-rows: 1fr; /* Todas as linhas terão a mesma altura */
	align-items: stretch;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const WrapperProjectCard = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	min-height: 270px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	border-radius: 4px;
	padding: 20px;
	transition: all 0.3s ease;
	border: 1px solid ${(props) => props.theme.colors.backgroundPage};

	.created_at {
		color: ${(props) => props.theme.colors.inactiveTitle};
		font-size: 12px;
		position: absolute;
		bottom: 10px;
	}

	:hover {
		border: 1px solid ${(props) => props.theme.colors.branding};
		transform: scale(1.01);
		box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
		-webkit-box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
		-moz-box-shadow: 0px 0px 40px 0px ${(props) => props.theme.colors.branding}5E;
	}

	.title-body {
		margin-top: 50px;

		.divider {
			margin-bottom: 20px;
		}
	}
`;

const WrapperTechStack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	height: 34px;
	width: 100%;
	margin-bottom: 10px;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}

	svg {
		width: 22px;
		height: 22px;
		margin-right: 3px;
		color: ${(props) => props.theme.colors.inactiveTitle};
		transition: all 0.3s ease;
	}

	a {
		svg {
			&:hover {
				cursor: pointer;
				color: ${(props) => props.theme.colors.branding};
			}
		}
	}
`;

const WrapperTextChip = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	position: absolute;
	top: 10px;
	right: 10px;

	div {
		span {
			//border: 1px solid ${(props) => props.theme.colors.branding};
			color: ${(props) => props.theme.colors.inactiveTitle};
			font-size: 12px;
			font-weight: 800;
			padding: 2px 8px 2px 8px;
			border-radius: 4px;
			margin-right: 3px;
			margin-left: 3px;
		}

		@media (max-width: 601px) {
			margin-bottom: 10px;
			font-size: 10px;
		}
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const ChipTechOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 20px;
	margin-bottom: 20px;
	//background-color: #ccc;
	width: 60%;

	svg {
		min-width: 28px;
		min-height: 28px;
		width: 28px;
		height: 28px;
		color: ${(props) => props.theme.colors.branding};
		margin-right: 10px;

		@media (max-width: 601px) {
			min-width: 18px;
			min-height: 18px;
			width: 18px;
			height: 18px;
		}
	}

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 601px) {
		display: none;
	}
`;

const WrapperButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	/* position: absolute;
	right: 10px;
	bottom: 10px; */
	transition: all 0.3s ease;

	a {
		//background-color: ${(props) => props.theme.colors.branding};
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		padding: 5px;
		color: ${(props) => props.theme.colors.branding};
		//border: solid 1px ${(props) => props.theme.colors.branding};
		border-radius: 4px;
		//margin-left: 3px;
	}
`;

const Chip = styled.span`
	color: ${(props) => (props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.inactiveTitle)};
	background-color: ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary)};
	border: 1px solid ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.inactiveTitle)};
	padding: 2px 7px 3px 7px;
	margin: 3px;
	border-radius: 4px;
	font-weight: 700;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 601px) {
		font-weight: 700;
		font-size: 10px;
	}
`;

export const TitleSpan = styled.h3`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px 15px 5px 10px;
	color: ${(props) => props.theme.colors.backgroundPage};
	background-color: ${(props) => props.theme.colors.branding};
	font-size: ${(props) => props.theme.fontSizes.md};
	border-radius: 2px 0 18px 0;

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
	}
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	padding-top: 60px;
	overflow: auto;
`;

export default function Portifolio() {
	const { language } = useContext(SettingsContext);
	const [stack, setStack] = useState("TODOS");
	const [view, setView] = useState("grid");

	const projects = [
		{
			id: 1,
			title: language.portifolioPage.projects.id_1.title,
			description: language.portifolioPage.projects.id_1.description,
			liveDemoUrl: null,
			// techs: [
			// 	<Tooltip toolTipText="PYTHON">
			// 		<LogoPython />
			// 	</Tooltip>,
			// 	<Tooltip toolTipText="CYBER SECURITY">
			// 		<Security />
			// 	</Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_1.url || null,
			typeProject: language.portifolioPage.projects.id_1.filter,
			created_at: language.portifolioPage.projects.id_1.createdAt,
		},
		{
			id: 2,
			title: language.portifolioPage.projects.id_2.title,
			description: language.portifolioPage.projects.id_2.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="ReactJS">
			// 	<ReactLogo />
			// </Tooltip>,
			// <Tooltip toolTipText="Expo">
			// 	<Expo />
			// </Tooltip>,
			// <Tooltip toolTipText="Javascript">
			// 	<Javascript />
			// </Tooltip>,
			// <Tooltip toolTipText="NodeJS">
			// 	<Nodejs />
			// </Tooltip>,
			// <Tooltip toolTipText="CSS">
			// 	<Css3 />
			// </Tooltip>,
			// <Tooltip toolTipText="MongoDB">
			// 	<Mongodb />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_2.url || null,
			typeProject: language.portifolioPage.projects.id_2.filter,
			created_at: language.portifolioPage.projects.id_2.createdAt,
		},
		{
			id: 3,
			title: language.portifolioPage.projects.id_3.title,
			description: language.portifolioPage.projects.id_3.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="ReactJS">
			// 	<ReactLogo />
			// </Tooltip>,
			// <Tooltip toolTipText="Expo">
			// 	<Expo />
			// </Tooltip>,
			// <Tooltip toolTipText="Javascript">
			// 	<Javascript />
			// </Tooltip>,
			// <Tooltip toolTipText="NodeJS">
			// 	<Nodejs />
			// </Tooltip>,
			// <Tooltip toolTipText="CSS">
			// 	<Css3 />
			// </Tooltip>,
			// <Tooltip toolTipText="MongoDB">
			// 	<Mongodb />
			// </Tooltip>,
			// <Tooltip toolTipText="Jest">
			// 	<Jest />
			// </Tooltip>,
			// <Tooltip toolTipText="SqLite">
			// 	<Sqlite />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_3.url || null,
			typeProject: language.portifolioPage.projects.id_3.filter,
			created_at: language.portifolioPage.projects.id_3.createdAt,
		},
		{
			id: 4,
			title: language.portifolioPage.projects.id_4.title,
			description: language.portifolioPage.projects.id_4.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="NodeJS">
			// 	<Nodejs />
			// </Tooltip>,
			// <Tooltip toolTipText="Javascript">
			// 	<Javascript />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_4.url || null,
			typeProject: language.portifolioPage.projects.id_4.filter,
			created_at: language.portifolioPage.projects.id_4.createdAt,
		},
		{
			id: 5,
			title: language.portifolioPage.projects.id_5.title,
			description: language.portifolioPage.projects.id_5.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="ReactJs">
			// 	<ReactLogo />
			// </Tooltip>,
			// <Tooltip toolTipText="Javascript">
			// 	<Javascript />
			// </Tooltip>,
			// <Tooltip toolTipText="Google Cloud">
			// 	<GoogleCloud />
			// </Tooltip>,
			// <Tooltip toolTipText="Sass">
			// 	<Sass />
			// </Tooltip>,
			// <Tooltip toolTipText="Firebase">
			// 	<Firebase />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_5.url || null,
			typeProject: language.portifolioPage.projects.id_5.filter,
			created_at: language.portifolioPage.projects.id_5.createdAt,
		},
		{
			id: 6,
			title: language.portifolioPage.projects.id_6.title,
			description: language.portifolioPage.projects.id_6.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="ReactJS">
			// 	<ReactLogo />
			// </Tooltip>,
			// <Tooltip toolTipText="Typescript">
			// 	<Typescript />
			// </Tooltip>,
			// <Tooltip toolTipText="SqLite">
			// 	<Sqlite />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_6.url || null,
			typeProject: language.portifolioPage.projects.id_6.filter,
			created_at: language.portifolioPage.projects.id_6.createdAt,
		},
		{
			id: 7,
			title: language.portifolioPage.projects.id_7.title,
			description: language.portifolioPage.projects.id_7.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="NodeJS">
			// 	<Nodejs />
			// </Tooltip>,
			// <Tooltip toolTipText="Typescript">
			// 	<Typescript />
			// </Tooltip>,
			// <Tooltip toolTipText="SqLite">
			// 	<Sqlite />
			// </Tooltip>,
			// <Tooltip toolTipText="Jest">
			// 	<Jest />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_7.url || null,
			typeProject: language.portifolioPage.projects.id_7.filter,
			created_at: language.portifolioPage.projects.id_7.createdAt,
		},
		{
			id: 8,
			title: language.portifolioPage.projects.id_8.title,
			description: language.portifolioPage.projects.id_8.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="NodeJS">
			// 	<Nodejs />
			// </Tooltip>,
			// <Tooltip toolTipText="Javascript">
			// 	<Javascript />
			// </Tooltip>,
			// <Tooltip toolTipText="MongoDB">
			// 	<Mongodb />
			// </Tooltip>,
			// <Tooltip toolTipText="AWS">
			// 	<Amazonaws />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_8.url || null,
			typeProject: language.portifolioPage.projects.id_8.filter,
			created_at: language.portifolioPage.projects.id_8.createdAt,
		},
		{
			id: 9,
			title: language.portifolioPage.projects.id_9.title,
			description: language.portifolioPage.projects.id_9.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="ReactJS">
			// 	<ReactLogo />
			// </Tooltip>,
			// <Tooltip toolTipText="Expo">
			// 	<Expo />
			// </Tooltip>,
			// <Tooltip toolTipText="Javascript">
			// 	<Javascript />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_9.url || null,
			typeProject: language.portifolioPage.projects.id_9.filter,
			created_at: language.portifolioPage.projects.id_9.createdAt,
		},
		{
			id: 10,
			title: language.portifolioPage.projects.id_10.title,
			description: language.portifolioPage.projects.id_10.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="Python">
			// 	<Python />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_10.url || null,
			typeProject: language.portifolioPage.projects.id_10.filter,
			created_at: language.portifolioPage.projects.id_10.createdAt,
		},
		{
			id: 11,
			title: language.portifolioPage.projects.id_11.title,
			description: language.portifolioPage.projects.id_11.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="Python">
			// 	<Python />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_11.url || null,
			typeProject: language.portifolioPage.projects.id_11.filter,
			created_at: language.portifolioPage.projects.id_11.createdAt,
		},
		{
			id: 12,
			title: language.portifolioPage.projects.id_12.title,
			description: language.portifolioPage.projects.id_12.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="Python">
			// 	<Python />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_12.url || null,
			typeProject: language.portifolioPage.projects.id_12.filter,
			created_at: language.portifolioPage.projects.id_12.createdAt,
		},
		{
			id: 13,
			title: language.portifolioPage.projects.id_13.title,
			description: language.portifolioPage.projects.id_13.description,
			liveDemoUrl: null,
			// techs: [
			// <Tooltip toolTipText="Python">
			// 	<Python />
			// 	// </Tooltip>,
			// ],
			sourceCodeLink: language.portifolioPage.projects.id_13.url || null,
			typeProject: language.portifolioPage.projects.id_13.filter,
			created_at: language.portifolioPage.projects.id_13.createdAt,
		},
	];

	const projectsRef = useRef(null);

	function handleFilter(id) {
		setStack(id);
		window.scrollTo({
			top: projectsRef.current.offsetTop - 450,
			behavior: "smooth",
		});
		setTimeout(() => {
			window.scrollTo({
				top: projectsRef.current.offsetTop,
				behavior: "smooth",
			});
		}, 400);
		// projectsRef.current.scrollIntoView();
	}

	const array_projects = stack == "TODOS" ? projects : projects.filter((item) => item.typeProject.includes(stack));

	return (
		<SectionPortifolio id="section-portifolio" ref={projectsRef}>
			<ContainerTitleSection>
				<TitleSection>{language.portifolioPage.title}</TitleSection>
			</ContainerTitleSection>

			<ChipTechOptions>
				<Filter className="svg" />
				<Chip
					id="TODOS"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("TODOS") ? true : false}>
					{language.portifolioPage.labelFilter}
				</Chip>

				<Chip
					id="PUBLISHED"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("PUBLISHED") ? true : false}>
					PUBLISHED
				</Chip>
				<Chip
					id="SECURITY"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("SECURITY") ? true : false}>
					SECURITY
				</Chip>
				<Chip
					id="ML"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("ML") ? true : false}>
					ML
				</Chip>
				<Chip
					id="WEB"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("WEB") ? true : false}>
					WEB
				</Chip>
				<Chip
					id="BLOCKCHAIN"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("BLOCKCHAIN") ? true : false}>
					BLOCKCHAIN
				</Chip>
			</ChipTechOptions>

			<ContainerGrid view={view}>
				{array_projects.map((project) => (
					<ScrollAnimation animateIn="fadeIn" animateOnce key={project.id}>
						<WrapperProjectCard>
							<WrapperTextChip>
								{project.typeProject.map((chip) => (
									<div key={chip.id}>
										<span>{chip}</span>
									</div>
								))}
							</WrapperTextChip>

							<TitleSpan>
								{project.title.split("\n").map((line) => {
									return [line, <br />];
								})}
							</TitleSpan>

							<div className="title-body">
								<BodyText>{project.description}</BodyText>
							</div>
							<WrapperTechStack>
								{/* <div>
									{project.techs.map((icone) => (
										<div key={icone.id}>{icone}</div>
									))}
								</div> */}

								<WrapperButtons>
									{project.liveDemoUrl != null && (
										<a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
											<Live />
										</a>
									)}

									{project.sourceCodeLink !== null && (
										<a href={project.sourceCodeLink} target="_blank" rel="noreferrer">
											{project.sourceCodeLink.startsWith("https://www.kaggle.com/") ? <Kaggle /> : <GithubOutline />}
										</a>
									)}
								</WrapperButtons>
							</WrapperTechStack>

							<span className="created_at">
								{language.portifolioPage.createdLabel}: {project.created_at}
							</span>
						</WrapperProjectCard>
					</ScrollAnimation>
				))}
			</ContainerGrid>
		</SectionPortifolio>
	);
}

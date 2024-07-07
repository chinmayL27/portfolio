import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { School } from "@styled-icons/ionicons-outline/School";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { Work } from "@styled-icons/material-rounded/Work";

const LearningAppIcon = styled(LearningApp)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const SchoolIcon = styled(School)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const WorkIcon = styled(Work)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const TitleContentTimeline = styled.h3`
	.vertical-timeline-element-title {
		color: ${(props) => props.theme.colors.branding};
	}
	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.contrastText};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

export default function TimelinePortifolio(props) {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}> May 2024 - Aug 2024</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Sigma Computing</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Security Engineer Intern</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>Aug 2023 - Aug 2024</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Johns Hopkins University</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Graduate Teaching Assistant</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>Aug 2023 - Present</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Johns Hopkins University</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelMasterDegree}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Master of Science in Security Informatics</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>Jan 2023 - May 2023</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Mercedes-Benz Research & Development</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Software Engineer Intern</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>Aug 2022 - Apr 2023</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Google Developer Student Club</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Core Member</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ color: "#000", borderBottom: `8px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc" }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.backgroundSecondary, backgroundColor: theme.colors.branding, padding: "0 6px 0 6px", borderRadius: "4px" }}>Aug 2019 - Jun 2023</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Indian Institute of Information Technology Sri City</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelBachelorDegree}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>B. Tech in Computer Science and Engineering</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
}

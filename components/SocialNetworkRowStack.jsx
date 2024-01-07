import styled from "styled-components";

// import { Instagram } from "@styled-icons/icomoon/Instagram";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Github } from "@styled-icons/bootstrap/Github";
// import { Whatsapp } from "styled-icons/boxicons-logos";
import { Kaggle } from "@styled-icons/simple-icons/Kaggle";

const SocialMediaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;

	@media (max-width: 600px) {
		width: 100%;
		//justify-content: space-between;
		margin-bottom: 20px;
	}
`;

const ButtonSocialMediaIcon = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 5px;
	width: 32px;
	height: 32px;
	transition: all 0.3s ease;
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};

	&:hover {
		cursor: pointer;
	}

	&:active {
		opacity: 0.5;
	}

	svg {
		color: ${(props) => props.theme.colors.branding};
		width: 24px;
		height: 24px;
		transition: all 0.3s ease;

		&:hover {
			color: ${(props) => props.theme.colors.branding};
		}
	}

	@media (max-width: 600px) {
		margin-left: 3px;
		margin-right: 3px;
	}

	:hover {
		transform: scale(1.1);
	}
`;

export default function SocialNetworkRowStack() {
	return (
		<SocialMediaContainer>
			<ButtonSocialMediaIcon href="https://www.linkedin.com/in/chinmay-lohani/" target="_blank" data-splitbee-event="linkedin-access">
				<LinkedinSquare />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="https://github.com/chinmayL27" target="_blank">
				<Github />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="mailto:clohani1@jh.edu" target="_blank">
				<MailSend />
			</ButtonSocialMediaIcon>

			<ButtonSocialMediaIcon href="https://www.kaggle.com/chinmay2711" target="_blank">
				<Kaggle />
			</ButtonSocialMediaIcon>

			{/* <ButtonSocialMediaIcon href="(551)232-8278" target="_blank">
				<Whatsapp />
			</ButtonSocialMediaIcon> */}

			<ButtonSocialMediaIcon href="mailto:chinmaylohani2711@gmail.com" target="_blank">
				<MailSend />
			</ButtonSocialMediaIcon>

			{/* <ButtonSocialMediaIcon href="https://www.instagram.com/im_chinmaylohani" target="_blank">
				<Instagram />
			</ButtonSocialMediaIcon> */}
		</SocialMediaContainer>
	);
}

import React, { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { useTheme } from "styled-components";

import AnimationYellowBackground from "@/public/lotties/landing-page-yellow.json";
import AnimationLightBackground from "@/public/lotties/landing-page-light.json";

const ContainerLottie = styled.div`
	width: 800px;
	height: 800px;
	transition: all 0.3s ease;

	@media (max-width: 1400px) {
		width: 600px;
		height: 600px;
	}

	@media (max-width: 1200px) {
		width: 500px;
		height: 500px;
	}

	@media (max-width: 900px) {
		width: 400px;
		height: 400px;
	}

	@media (max-width: 425px) {
		width: 300px;
		height: 300px;
	}
`;

const AnimationsToShow = {
	dark: AnimationYellowBackground,
	light: AnimationLightBackground,
};

export default function LandingPageAnimation() {
	const theme = useTheme();
	const [isStopped] = useState(false);
	const [isPaused] = useState(false);

	var defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: AnimationsToShow[theme.name],
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<ContainerLottie>
			<Lottie options={defaultOptions} height={"80%"} width={"80%"} isStopped={isStopped} isPaused={isPaused} isClickToPauseDisabled={true} />
		</ContainerLottie>
	);
}

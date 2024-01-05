import React from "react";
import SobreMimPage from "../pages/sobre-mim";
import PortfolioPage from "../pages/portfolio";
import ExperienciaPage from "../pages/experiencia";
import HomePage from "../pages/homepage";
import FooterPage from "@/components/FooterPage";

export default function Index() {
	return (
		<>
			<HomePage />
			<SobreMimPage />
			<PortfolioPage />
			<ExperienciaPage />
			<FooterPage />
		</>
	);
}

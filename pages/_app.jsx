import "../styles/font.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import GlobalStyle from "../styles/globalStyle";
import LayoutTemplate from "../components/LayoutTemplate";

import SettingsContext from "@/context/SettingsContext";

function MyApp({ Component, pageProps }) {
	return (
		<SettingsContext>
			<Analytics />
			<GlobalStyle />
			<LayoutTemplate>
				<Component {...pageProps} />
			</LayoutTemplate>
		</SettingsContext>
	);
}

export default MyApp;

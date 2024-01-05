import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";

//Lista de temas
import { darkTheme, lightTheme } from "@/styles/Theme";

//Pacotes com textos de linguagens
import enusJson from "@/config/localization/enus.json";

export const SettingsContext = createContext({});

const themeList = {
	light: lightTheme,
	dark: darkTheme,
};

export default function SettingsProvider({ children }) {
	const [theme, setTheme] = useState(lightTheme);

	function changeTheme(newTheme) {
		setTheme(themeList[newTheme]);
	}

	var language = enusJson;

	return (
		<SettingsContext.Provider value={{ changeTheme, language }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}

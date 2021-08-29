import { createContext, useContext, useState } from 'react';

export let darkThemeContext = createContext(null);

export default function DarkThemeProvider({ children }) {
	let OSTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	let [isDarkTheme, setIsDarkTheme] = useState(OSTheme);
	return (
		<darkThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
			{children}
		</darkThemeContext.Provider>
	);
}

export let useTheme = () => {
	let context = useContext(darkThemeContext);
	return context;
};

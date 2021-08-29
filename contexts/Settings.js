import { createContext, useContext, useState } from 'react';
import constants from '../constants';

export let settingsContext = createContext(null);

let { LANGUAGES, TIME, UNITS } = constants;

export default function SettingsProvider({ children }) {
	let defaultSettingsString = localStorage.getItem('WEATHER_FORECAST_APP');
	let defaultSettings = defaultSettingsString
		? JSON.parse(defaultSettingsString)
		: {
				LANGUAGE: LANGUAGES.EN,
				UNITS: UNITS.METRICS,
				TIME: TIME[24],
		  };

	let [settings, setSettings] = useState(defaultSettings);

	return (
		<settingsContext.Provider value={{ settings, setSettings }}>
			{children}
		</settingsContext.Provider>
	);
}

export let useSettings = () => {
	let context = useContext(settingsContext);
	return context;
};

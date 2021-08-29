import { createContext, useContext, useState } from 'react';
import constants from '../constants';
import { useSettings } from './Settings';
import { useCoordinates } from './Coordinates';

let { WeatherList } = constants;

export let weatherContext = createContext(null);

export default function WeatherProvider({ children }) {
	let { settings } = useSettings();
	let { coordinates } = useCoordinates();

	let [weather, setWeather] = useState(null);
	let [weatherList, setWeatherList] = useState(null);

	return (
		<weatherContext.Provider
			value={{ weather, setWeather, weatherList, setWeatherList }}
		>
			{children}
		</weatherContext.Provider>
	);
}

export let useWeather = () => {
	let context = useContext(weatherContext);
	return context;
};

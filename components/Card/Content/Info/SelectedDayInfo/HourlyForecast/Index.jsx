import Chart from './Chart';

import { useWeather } from '../../../../../../contexts/Weather';
import { useSettings } from '../../../../../../contexts/Settings';

let HourlyForecast = () => {
	let { settings } = useSettings();
	let { weather } = useWeather();

	let units = settings.UNITS.name.toUpperCase();

	// let uv = weather.uv;
	let temperature = weather[units].hourly;

	let weatherData = temperature;

	return (
		<div className="p-2 space-y-3">
			<header className="capitalize font-normal text-sm">
				<h1>{settings.LANGUAGE.hourlyForecast}</h1>
			</header>
			<main>
				<Chart dataValues={['temperature']} dataKey="time" data={weatherData} />
			</main>
		</div>
	);
};

export default HourlyForecast;

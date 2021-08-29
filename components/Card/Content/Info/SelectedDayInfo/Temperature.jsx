import { Icon } from '@iconify/react';

import { useTheme } from '../../../../../contexts/Theme';
import { useSettings } from '../../../../../contexts/Settings';
import { useWeather } from '../../../../../contexts/Weather';

let Temperature = () => {
	let { isDarkTheme } = useTheme();
	let { settings } = useSettings();
	let { weather } = useWeather();

	let units = settings.UNITS.name.toUpperCase();

	let date = new Date(weather.date);
	let dateString = `${
		settings.LANGUAGE.months[date.getMonth()]
	}, ${date.getDate()}`;

	return (
		<div className="p-2 flex items-center justify-between">
			<div className="w-1/2">
				<span className="text-lg font-semibold">{dateString}</span>
				<div
					className={`flex items-center ${
						isDarkTheme ? 'text-gray-200' : 'text-gray-600'
					}`}
				>
					<Icon icon="heroicons-outline:location-marker" className="h-4 w-4" />
					<span className="font-light text-xs">{weather.location}</span>
				</div>
			</div>

			<div className="flex items-center justify-end w-1/2">
				<div>
					<span
						className={`block font-light text-xs text-right ${
							isDarkTheme ? 'text-gray-200' : 'text-gray-600'
						}`}
					>
						{weather.description}
					</span>
					<div className="flex items-center justify-end">
						<Icon icon="carbon:temperature-hot" className="h-5 w-5" />
						<span className="text-2xl">
							{Math.round(weather[units].avgerage)}°
							{settings.UNITS.units.temperature}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Temperature;

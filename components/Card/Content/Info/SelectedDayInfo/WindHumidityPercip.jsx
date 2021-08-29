import { Icon } from '@iconify/react';

import { useTheme } from '../../../../../contexts/Theme';
import { useSettings } from '../../../../../contexts/Settings';
import { useWeather } from '../../../../../contexts/Weather';

let WindHumidityPercip = () => {
	let { isDarkTheme } = useTheme();
	let { settings } = useSettings();
	let { weather } = useWeather();

	let units = settings.UNITS.name.toUpperCase();

	return (
		<div className="p-2 flex items-center justify-between">
			<div className="flex items-center space-x-1">
				<Icon icon="bi:cloud-rain" className="h-7 w-7" />
				<div className="leading-none">
					<span
						className={`block font-light ${
							isDarkTheme ? 'text-gray-200' : 'text-gray-600'
						}`}
					>
						{weather[units].precipitation}
					</span>
					<span className="block text-xs">{settings.UNITS.units.distance}</span>
				</div>
			</div>
			<div className="flex items-center space-x-1">
				<Icon icon="iconoir:wind" className="h-7 w-7" />
				<div className="leading-none">
					<span
						className={`block font-light ${
							isDarkTheme ? 'text-gray-200' : 'text-gray-600'
						}`}
					>
						{weather[units].wind}
					</span>
					<span className="block text-xs">{settings.UNITS.units.speed}</span>
				</div>
			</div>
			<div className="flex items-center">
				<Icon icon="carbon:humidity" className="h-7 w-7" />
				<div className="leading-none">
					<span
						className={`block font-light ${
							isDarkTheme ? 'text-gray-200' : 'text-gray-600'
						}`}
					>
						{weather.humidity}
					</span>
					<span className="block text-xs">%</span>
				</div>
			</div>
		</div>
	);
};

export default WindHumidityPercip;

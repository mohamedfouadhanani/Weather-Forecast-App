// COMPONENTS
import { useTheme } from '../../../../../contexts/Theme';
import HourlyForecast from './HourlyForecast';
import Temperature from './Temperature';
import WindHumidityPercip from './WindHumidityPercip';

let SelectedDayInfo = () => {
	let { isDarkTheme } = useTheme();
	return (
		<div
			className={`flex-1 divide-y h-3/5 overflow-x-hidden ${
				isDarkTheme ? darkThemeClassName : lightThemeClassName
			} !rounded-tl-md`}
		>
			<Temperature />
			<WindHumidityPercip />
			<HourlyForecast />
		</div>
	);
};

export default SelectedDayInfo;

let lightThemeClassName = 'divide-gray-200 custom-light-scrollbar';
let darkThemeClassName = 'divide-gray-700 custom-dark-scrollbar';

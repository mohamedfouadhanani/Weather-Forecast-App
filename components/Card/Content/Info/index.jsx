import { useTheme } from '../../../../contexts/Theme';
import SelectedDayInfo from './SelectedDayInfo/Index';
import WeekForecast from './WeekForecast/Index';

let Info = () => {
	let { isDarkTheme } = useTheme();

	return (
		<div
			className={`${
				isDarkTheme ? darkThemeClassName : lightThemeClassName
			} ring-1 h-full flex flex-col justify-between divide-y rounded-l-md`}
		>
			<SelectedDayInfo />
			<WeekForecast />
		</div>
	);
};

export default Info;

let lightThemeClassName = 'bg-white ring-gray-200 divide-gray-200';
let darkThemeClassName = 'bg-gray-900 ring-gray-700 divide-gray-700 text-white';

import { useSettings } from '../../../../../../contexts/Settings';
import { useTheme } from '../../../../../../contexts/Theme';

let CustomTooltip = ({ payload }) => {
	let { settings } = useSettings();
	let { isDarkTheme } = useTheme();

	if (payload[0]) {
		let { time, temperature } = payload[0].payload;
		let timeFormat = settings.TIME;

		if (timeFormat.abreviation === '12') {
			time = parseInt(time.split(':')[0]);
			time =
				time === 0
					? '12 AM'
					: time === 12
					? '12 PM'
					: time < 12
					? `${time % 12} AM`
					: `${time % 12} PM`;
		}

		return (
			<div
				className={`${
					isDarkTheme ? darkThemeClassName : lightThemeClassName
				} ring-1 shadow rounded-md leading-none p-2 flex flex-col justify-center`}
			>
				<span className="font-light text-xs">{time}</span>
				<span className="font-semibold text-xl">
					{temperature}°{settings.UNITS.units.temperature}
				</span>
			</div>
		);
	}
	return null;
};

export default CustomTooltip;

let lightThemeClassName = 'ring-gray-200 bg-white text-black';
let darkThemeClassName = 'ring-gray-700 bg-gray-900 text-white';

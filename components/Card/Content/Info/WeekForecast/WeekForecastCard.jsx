import { useTheme } from '../../../../../contexts/Theme';
import { useSettings } from '../../../../../contexts/Settings';

let WeekForecastCard = ({
	date,
	highest,
	lowest,
	description,
	isSelected,
	onClick,
}) => {
	let { isDarkTheme } = useTheme();
	let { settings } = useSettings();

	let dateDate = new Date(date);
	let month = settings.LANGUAGE.months[dateDate.getMonth()].slice(0, 3);
	let dateString = `${month}, ${dateDate.getDate()}`;

	return (
		<button
			onClick={() => onClick(date)}
			className={`${
				isDarkTheme
					? isSelected
						? selectedDarkThemeClassName
						: darkThemeClassName
					: isSelected
					? selectedLightThemeClassName
					: lightThemeClassName
			} !w-24 text-center flex flex-col justify-between items-center ring-1 p-2 rounded-md`}
		>
			<span className="font-medium text-md h-1/4">{dateString}</span>
			<div className="h-1/4 flex items-center">
				<div className="space-x-1">
					<span className="font-bold">
						{highest}°{settings.UNITS.units.temperature}
					</span>
					<span className={`text-xs ${isDarkTheme && 'font-light'}`}>
						{lowest}°{settings.UNITS.units.temperature}
					</span>
				</div>
			</div>
			<span
				className={`block text-sm h-2/4 w-full ${isDarkTheme && 'font-light'}`}
			>
				{description}
			</span>
		</button>
	);
};

export default WeekForecastCard;

let lightThemeClassName = 'bg-white ring-gray-200';
let darkThemeClassName = 'bg-gray-900 ring-gray-700 text-white ';

let selectedDarkThemeClassName = 'bg-gray-700 ring-gray-700 text-white';
let selectedLightThemeClassName = 'bg-gray-50 ring-gray-200';

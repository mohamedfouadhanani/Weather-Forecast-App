import { Icon } from '@iconify/react';
import constants from '../../../../public/constants';
import { useAlerts } from '../../../../contexts/Alerts';
import { useSettings } from '../../../../contexts/Settings';
import { useTheme } from '../../../../contexts/Theme';
// import CustomSelect from './CustomSelect';
import CustomListbox from '../../../CustomListbox';

let { LANGUAGES, UNITS, TIME } = constants;

let Settings = () => {
	let { settings, setSettings } = useSettings();
	let { isDarkTheme } = useTheme();
	let { setAlerts, alerts } = useAlerts();

	let handleSave = settings => {
		localStorage.setItem('WEATHER_FORECAST_APP', JSON.stringify(settings));
		alerts = [
			...alerts,
			{
				type: 'success',
				message: settings.LANGUAGE.save,
			},
		];
		setAlerts(alerts);
	};

	let handleReset = () => {
		let localStorageData = localStorage.getItem('WEATHER_FORECAST_APP');
		if (localStorageData) {
			localStorage.removeItem('WEATHER_FORECAST_APP');
			setSettings({
				LANGUAGE: LANGUAGES.EN,
				UNITS: UNITS.METRICS,
				TIME: TIME[24],
			});
			alerts = [
				...alerts,
				{
					type: 'success',
					message: settings.LANGUAGE.reset,
				},
			];
			setAlerts(alerts);
		} else {
			alerts = [
				...alerts,
				{
					type: 'error',
					message: settings.LANGUAGE.resetError,
				},
			];
			setAlerts(alerts);
		}
	};

	return (
		<div
			className={`p-2 flex flex-col justify-between h-full ring-1 rounded-l-md ${
				isDarkTheme ? darkThemeClassName : lightThemeClassName
			}`}
		>
			<div className="space-y-4">
				<CustomListbox
					label={settings.LANGUAGE.language}
					onChange={selected => {
						setSettings(prevState => ({
							...prevState,
							LANGUAGE: selected,
						}));
					}}
					list={Object.values(LANGUAGES)}
					getSelectedItemName={selected => selected.name}
					unitialSelection={settings.LANGUAGE}
				/>

				<CustomListbox
					label={settings.LANGUAGE.units}
					onChange={selected => {
						setSettings(prevState => ({
							...prevState,
							UNITS: selected,
						}));
					}}
					list={Object.values(UNITS)}
					getSelectedItemName={selected => selected.name}
					unitialSelection={settings.UNITS}
				/>

				<CustomListbox
					label={settings.LANGUAGE.timeFormat}
					onChange={selected => {
						setSettings(prevState => ({
							...prevState,
							TIME: selected,
						}));
					}}
					list={Object.values(TIME)}
					getSelectedItemName={selected => selected.name}
					unitialSelection={settings.TIME}
				/>
			</div>

			<div className="flex items-center w-full">
				<button
					className={`block w-9/12 px-3 py-2 rounded-l-md transition-all ${
						isDarkTheme ? darkThemeButtonClassName : lightThemeButtonClassName
					}`}
					onClick={() => {
						handleSave(settings);
					}}
				>
					{settings.LANGUAGE.save}
				</button>
				<button
					onClick={() => {
						handleReset();
					}}
					className={`block w-3/12 h-full rounded-r-md transition-all flex items-center justify-center ${
						isDarkTheme
							? darkThemeResetButtonClassName
							: lightThemeResetButtonClassName
					}`}
				>
					<Icon className={`h-6 w-6`} icon="heroicons-outline:trash" />
				</button>
			</div>
		</div>
	);
};

export default Settings;

let lightThemeClassName = 'bg-white ring-gray-200';
let darkThemeClassName = 'bg-gray-900 ring-gray-700 text-white';

let lightThemeButtonClassName = 'bg-gray-100 hover:bg-gray-200';
let darkThemeButtonClassName = 'bg-gray-800 hover:bg-gray-700';

let lightThemeResetButtonClassName =
	'bg-gray-100 text-gray-400 hover:bg-red-500 hover:text-white';
let darkThemeResetButtonClassName = 'bg-gray-800 hover:bg-red-700';

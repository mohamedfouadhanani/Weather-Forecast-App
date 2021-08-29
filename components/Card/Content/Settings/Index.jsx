import { Icon } from '@iconify/react';
import constants from '../../../../public/constants';
import { useAlerts } from '../../../../contexts/Alerts';
import { useSettings } from '../../../../contexts/Settings';
import { useTheme } from '../../../../contexts/Theme';
import CustomSelect from './CustomSelect';

let { LANGUAGES, UNITS, TIME } = constants;

let Settings = () => {
	let { settings, setSettings } = useSettings();
	let { isDarkTheme } = useTheme();
	let { setAlerts, alerts } = useAlerts();

	let handleSave = settings => {
		localStorage.setItem('WEATHER_FORECAST_APP', JSON.stringify(settings));
	};

	let handleReset = () => {
		localStorage.removeItem('WEATHER_FORECAST_APP');
	};

	return (
		<div
			className={`p-2 flex flex-col justify-between h-full ring-1 rounded-l-md ${
				isDarkTheme ? darkThemeClassName : lightThemeClassName
			}`}
		>
			<div className="space-y-4">
				<CustomSelect
					value={settings.LANGUAGE.abreviation}
					label={settings.LANGUAGE.language}
					onChange={e => {
						let selectedLanguageAbreviation = e.target.value;
						let selectedLanguage = LANGUAGES[selectedLanguageAbreviation];
						setSettings(prevState => ({
							...prevState,
							LANGUAGE: selectedLanguage,
						}));
					}}
				>
					{Object.keys(LANGUAGES).map(language => (
						<option key={language} value={LANGUAGES[language].abreviation}>
							{LANGUAGES[language].name}
						</option>
					))}
				</CustomSelect>
				{/*  */}
				<CustomSelect
					value={settings.UNITS.abreviation}
					label={settings.LANGUAGE.units}
					onChange={e => {
						let selectedUnitAbreviation = e.target.value;
						let selectedUnits = Object.values(UNITS).find(
							unit => unit.abreviation === selectedUnitAbreviation
						);
						setSettings(prevState => ({
							...prevState,
							UNITS: selectedUnits,
						}));
					}}
				>
					{Object.keys(UNITS).map(UNIT => {
						return (
							<option key={UNIT} value={UNITS[UNIT].abreviation}>
								{UNITS[UNIT].name}
							</option>
						);
					})}
				</CustomSelect>
				{/*  */}
				<CustomSelect
					value={settings.TIME.abreviation}
					label={settings.LANGUAGE.timeFormat}
					onChange={e => {
						let selectedTimeAbreviation = e.target.value;
						let selectedTime = TIME[selectedTimeAbreviation];
						setSettings(prevState => ({
							...prevState,
							TIME: selectedTime,
						}));
					}}
				>
					{Object.keys(TIME).map(time => (
						<option key={time} value={time}>
							{TIME[time].name}
						</option>
					))}
				</CustomSelect>
			</div>

			<div className="flex items-center w-full">
				<button
					className={`block w-9/12 px-3 py-2 rounded-l-md transition-all ${
						isDarkTheme ? darkThemeButtonClassName : lightThemeButtonClassName
					}`}
					onClick={() => {
						handleSave(settings);
						alerts = [
							...alerts,
							{
								type: 'success',
								message: settings.LANGUAGE.save,
							},
						];
						setAlerts(alerts);
					}}
				>
					{settings.LANGUAGE.save}
				</button>
				<button
					onClick={() => {
						handleReset();
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

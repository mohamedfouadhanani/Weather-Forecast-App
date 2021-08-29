import TabBarButton from './TabBarButton';

import { useCoordinates } from '../../../contexts/Coordinates';
import { useTab } from '../../../contexts/Tab';
import { useTheme } from '../../../contexts/Theme';
import { useWeather } from '../../../contexts/Weather';

let TabsBar = () => {
	let { setCoordinates } = useCoordinates();
	let { tab, setTab, TABS } = useTab();
	let { setIsDarkTheme, isDarkTheme } = useTheme();
	let { setWeather, setWeatherList } = useWeather();

	return (
		<div
			className={`${
				isDarkTheme ? darkThemeClassName : lightThemeClassName
			} p-2 flex flex-col justify-between items-center rounded-r-md ring-1 w-1/6`}
		>
			<TabBarButton
				icon="heroicons-outline:x"
				clickhandlingfunction={() => {
					setCoordinates(null);
					setWeather(null);
					setWeatherList(null);
				}}
			/>

			<div className="space-y-2">
				<TabBarButton
					icon="heroicons-outline:information-circle"
					clickhandlingfunction={() => setTab(TABS.INFO)}
					selected={tab.name === TABS.INFO.name}
				/>
				<TabBarButton
					icon="heroicons-outline:cog"
					clickhandlingfunction={() => setTab(TABS.SETTINGS)}
					selected={tab.name === TABS.SETTINGS.name}
				/>
				<TabBarButton
					icon="heroicons-outline:question-mark-circle"
					clickhandlingfunction={() => setTab(TABS.FAQ)}
					selected={tab.name === TABS.FAQ.name}
				/>
				<TabBarButton
					icon="heroicons-outline:moon"
					clickhandlingfunction={() => setIsDarkTheme(prevState => !prevState)}
					selected={isDarkTheme}
				/>
			</div>
		</div>
	);
};

export default TabsBar;

let lightThemeClassName = 'bg-white ring-gray-200';
let darkThemeClassName = 'bg-gray-900 ring-gray-700';

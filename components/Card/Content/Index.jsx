import { useCoordinates } from '../../../contexts/Coordinates';
import { useTab } from '../../../contexts/Tab';
import { useTheme } from '../../../contexts/Theme';
import Info from './Info';
import Settings from './Settings';
import FAQ from './FAQ';

let Content = () => {
	let { coordinates } = useCoordinates();
	let { tab, TABS } = useTab();
	let { isDarkTheme } = useTheme();

	return (
		<div className="flex-1 w-5/6">
			{tab.name === TABS.INFO.name && <Info />}
			{tab.name === TABS.SETTINGS.name && <Settings />}
			{tab.name === TABS.FAQ.name && <FAQ />}
		</div>
	);
};

export default Content;

import { useTab } from '../../../contexts/Tab';
import Info from './Info/index';
import Settings from './Settings/Index';
import FAQ from './FAQ/Index';

let Content = () => {
	let { tab, TABS } = useTab();

	return (
		<div className="flex-1 w-5/6">
			{tab.name === TABS.INFO.name && <Info />}
			{tab.name === TABS.SETTINGS.name && <Settings />}
			{tab.name === TABS.FAQ.name && <FAQ />}
		</div>
	);
};

export default Content;

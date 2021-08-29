import { createContext, useContext, useState } from 'react';

export let tabContext = createContext(null);

const TABS = {
	INFO: {
		name: 'INFO',
		Component: 'HERE_COMPONENT',
	},
	SETTINGS: {
		name: 'SETTINGS',
		Component: 'HERE_COMPONENT',
	},
	FAQ: {
		name: 'FAQ',
		Component: 'HERE_COMPONENT',
	},
};

export default function TabProvider({ children }) {
	let [tab, setTab] = useState(TABS.INFO);
	return (
		<tabContext.Provider value={{ tab, setTab, TABS }}>
			{children}
		</tabContext.Provider>
	);
}

export let useTab = () => {
	let context = useContext(tabContext);
	return context;
};

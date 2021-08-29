import { createContext, useContext, useState } from 'react';
import constants from '../public/constants';
import { useSettings } from './Settings';

let { FAQList } = constants;

export let faqContext = createContext(null);

export default function FAQProvider({ children }) {
	let { settings } = useSettings();
	let [faqs, setFAQs] = useState(FAQList[settings.LANGUAGE.abreviation]);

	return (
		<faqContext.Provider value={{ faqs, setFAQs, FAQList }}>
			{children}
		</faqContext.Provider>
	);
}

export let useFAQs = () => {
	let context = useContext(faqContext);
	return context;
};

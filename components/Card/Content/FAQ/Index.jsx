import { useTheme } from '../../../../contexts/Theme';
import FAQItem from './FAQItem';
import { useFAQs } from '../../../../contexts/FAQ';

let FAQ = () => {
	let { isDarkTheme } = useTheme();
	let { faqs } = useFAQs();

	return (
		<div
			className={`p-2 h-full ring-1 rounded-l-md overflow-x-hidden space-y-4 ${
				isDarkTheme ? darkThemeClassName : lightThemeClassName
			}`}
		>
			{faqs.map((FAQListItem, idx) => (
				<FAQItem
					title={FAQListItem.title}
					content={FAQListItem.content}
					key={idx}
				/>
			))}
		</div>
	);
};

export default FAQ;

let lightThemeClassName = 'bg-white ring-gray-200 custom-light-scrollbar';
let darkThemeClassName =
	'bg-gray-900 ring-gray-700 text-white custom-dark-scrollbar';

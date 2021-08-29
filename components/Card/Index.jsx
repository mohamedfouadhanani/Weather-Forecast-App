import TabsBar from './TabsBar/Index';
import Content from './Content/Index';
import { useTheme } from '../../contexts/Theme';

let Card = () => {
	let { isDarkTheme } = useTheme();

	return (
		<div
			className={`${
				isDarkTheme ? darkThemeClassName : lightThemeClassName
			} bg-white shadow-lg h-96 w-full sm:w-72 !rounded-md flex`}
		>
			<Content />
			<TabsBar />
		</div>
	);
};

export default Card;

let lightThemeClassName = 'selection:bg-gray-900 selection:text-white';
let darkThemeClassName = 'selection:bg-gray-700 selection:text-gray-100';

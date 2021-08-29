import { Icon } from '@iconify/react';
import { useTheme } from '../../../contexts/Theme';

let TabBarButton = ({ icon, clickhandlingfunction, selected }) => {
	let { isDarkTheme } = useTheme();

	let lightThemeClassName = `text-gray-400 bg-white hover:bg-gray-100 hover:text-gray-600`;
	let darkThemeClassName = `text-white hover:bg-gray-800`;

	let lightSelectedClassName = `bg-gray-100 text-gray-600`;
	let darkSelectedClassName = `bg-gray-800 text-white`;

	return (
		<button
			onClick={clickhandlingfunction}
			className={`${isDarkTheme ? darkThemeClassName : lightThemeClassName} ${
				(selected && isDarkTheme && darkSelectedClassName) ||
				(selected && !isDarkTheme && lightSelectedClassName)
			} p-1 block !rounded-md transition-all`}
		>
			<Icon icon={icon} className="h-8 w-8" />
		</button>
	);
};

export default TabBarButton;

import { useTheme } from '../../../../contexts/Theme';

let CustomSelect = ({ label, onChange, children, value }) => {
	let { isDarkTheme } = useTheme();

	return (
		<div className="space-y-2">
			<div>
				<label htmlFor={label} className="capitalize font-bold">
					{label}
				</label>
			</div>
			<select
				value={value}
				id={label}
				className={`block w-full rounded-md outline-none focus:outline-none focus:ring-0 border-none ${
					isDarkTheme ? darkThemeClassName : lightThemeClassName
				}`}
				onChange={onChange}
			>
				{children}
			</select>
		</div>
	);
};

export default CustomSelect;

let lightThemeClassName = 'bg-gray-100 text-gray-900 focus:bg-gray-50';
let darkThemeClassName = 'bg-gray-800 text-gray-200 focus:bg-gray-700';

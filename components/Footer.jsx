import Link from 'next/link';
import { useTheme } from '../contexts/Theme';

let Footer = () => {
	let { isDarkTheme } = useTheme();
	let year = new Date().getFullYear();

	return (
		<div
			className={`${
				isDarkTheme ? darkThemeClassName : lightThemeClassName
			} text-xs flex items-center justify-center text-center rounded-md shadow-lg p-2 ring-1 h-14`}
		>
			<div className="space-y-1">
				<div className="space-x-1">
					<span className="font-black">&copy; {year} Fouad HANANI,</span>
					<span>All rights reserved.</span>
				</div>
				<div className="space-x-2 text-light">
					<Link href="/terms-and-conditions">
						<a
							target="_blank"
							className={`${
								isDarkTheme ? 'hover:text-gray-200' : 'hover:text-gray-500'
							} hover:underline`}
						>
							Terms and Conditions
						</a>
					</Link>
					<Link target="_blank" href="/privacy-policy">
						<a
							target="_blank"
							className={`${
								isDarkTheme ? 'hover:text-gray-200' : 'hover:text-gray-500'
							} hover:underline`}
						>
							Privacy Policy
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;

let lightThemeClassName = 'bg-white ring-gray-200';
let darkThemeClassName = 'bg-gray-900 ring-gray-700 text-white';

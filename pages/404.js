import Head from 'next/head';
import Link from 'next/link';
import { useTheme } from '../contexts/Theme';

let NotFound = () => {
	let { isDarkTheme } = useTheme();

	return (
		<>
			<Head>
				<title>Weather Forecast App | Not Found</title>
			</Head>
			<div
				className={`${
					isDarkTheme && 'text-white bg-gray-900'
				} w-screen h-screen flex items-center justify-center`}
			>
				<div className="flex flex-col justify-around text-center space-y-4 md:space-y-6 w-3/4 md:w-1/2">
					<span className="capitalize font-bold text-4xl md:text-6xl">
						page not found
					</span>
					<span
						className={`font-light text-lg md:text-2xl ${
							isDarkTheme ? 'text-gray-100' : 'text-gray-600'
						}`}
					>
						Looks like this page does not exist, please use the button below to
						navigate back to the app.
					</span>
					<Link href="/">
						<a
							className={`w-full py-3 rounded transition-all ${
								isDarkTheme
									? 'bg-gray-800 hover:bg-gray-700 hover:text-gray-200'
									: 'bg-gray-200 hover:bg-gray-100 hover:text-gray-600'
							}`}
						>
							Go Back
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NotFound;

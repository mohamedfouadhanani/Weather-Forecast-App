import Head from 'next/head';
import Link from 'next/link';
import { useTheme } from '../contexts/Theme';

let Fallback = () => {
	let { isDarkTheme } = useTheme();

	return (
		<>
			<Head>
				<title>Weather Forecast App | Offline</title>
			</Head>
			<div
				className={`${
					isDarkTheme && 'text-white bg-gray-900'
				} w-screen h-screen flex items-center justify-center`}
			>
				<div className="flex flex-col justify-around text-center space-y-4 md:space-y-6 w-3/4 md:w-1/2">
					<span className="capitalize font-bold text-4xl md:text-6xl">
						You're Offline
					</span>
					<span
						className={`font-light text-lg md:text-2xl ${
							isDarkTheme ? 'text-gray-100' : 'text-gray-600'
						}`}
					>
						Looks like you're not connected to the World Wide Web, please use
						the button bellow to refresh.
					</span>
					<Link href="/">
						<a
							className={`w-full py-3 rounded transition-all ${
								isDarkTheme
									? 'bg-gray-800 hover:bg-gray-700 hover:text-gray-200'
									: 'bg-gray-200 hover:bg-gray-100 hover:text-gray-600'
							}`}
						>
							Refresh
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Fallback;

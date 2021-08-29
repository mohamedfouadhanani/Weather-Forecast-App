import Head from 'next/head';
import Link from 'next/link';

let NotFound = () => {
	return (
		<>
			<Head>
				<title>Weather Forecast App | Not Found</title>
			</Head>
			<div className="w-screen h-screen flex items-center justify-center not-found-page-bg">
				<div className="flex flex-col space-around text-center bg-white p-4 rounded-lg shadow-lg">
					<span className="font-bold text-8xl">404</span>
					<span className="font-light text-lg">Oops...Page not found</span>
					<Link href="/">
						<a className="w-full bg-gray-200 mt-4 py-2 rounded hover:bg-gray-100 hover:text-gray-500 transition-all">
							Go Back
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NotFound;

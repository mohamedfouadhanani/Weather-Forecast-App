import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect } from 'react';
import ContextsProvider from '../contexts';
import * as gtag from '../lib/gtag';

import '../styles/global.css';

let MyApp = ({ Component, pageProps }) => {
	let router = useRouter();

	useEffect(() => {
		const handleRouteChange = url => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/ico.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charSet="UTF-8" />
				<meta name="author" content="@its_fouad_hanani" />
				<meta
					name="description"
					content="Check the general and hourly temperature and many more info on the weather in any area in the world with a simple mouse click."
				/>
				<meta
					name="keywords"
					content="weather, forecast, map, world map, weather forecast, multilanguage"
				/>
			</Head>
			<ContextsProvider>
				<Component {...pageProps} />
			</ContextsProvider>
		</>
	);
};

export default MyApp;

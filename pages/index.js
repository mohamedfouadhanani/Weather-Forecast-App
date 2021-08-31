import { createClient } from 'contentful';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect } from 'react';

// COMPONENTS
import Alert from '../components/Alert/Index';
// import Announcements from '../components/Announcements/Index';
import Layer from '../components/Layer';

// CONTEXTS
import { useCoordinates } from '../contexts/Coordinates';
import { useSettings } from '../contexts/Settings';
import { useWeather } from '../contexts/Weather';
import { useFAQs } from '../contexts/FAQ';

// CONSTANTS
import constants from '../public/constants';
import Footer from '../components/Footer';
import { useAlerts } from '../contexts/Alerts';

let { LANGUAGES } = constants;

let Map = dynamic(() => import('../components/Map'), {
	ssr: false,
});

let Card = dynamic(() => import('../components/Card/Index'), {
	ssr: false,
});

let Index = ({ FAQList, announcementsList }) => {
	let { coordinates, setCoordinates } = useCoordinates();
	let { settings } = useSettings();
	let { weather, setWeatherList, setWeather } = useWeather();
	let { setFAQs } = useFAQs();

	let { alerts } = useAlerts();

	useEffect(() => {
		if (coordinates) {
			axios
				.post('/api/weather', {
					latitude: coordinates[0],
					longitude: coordinates[1],
					language: settings.LANGUAGE.abreviation,
				})
				.then(({ data }) => {
					if (data) {
						setWeatherList(data);
						setWeather(data[0]);
					} else {
						setWeatherList(null);
						setWeather(null);
					}
				})
				.catch(error => {
					setWeatherList(null);
					setWeather(null);
					setCoordinates(null);
				});
		}
	}, [settings.LANGUAGE, coordinates]);

	useEffect(() => {
		setFAQs(FAQList[settings.LANGUAGE.abreviation]);
	}, [settings.LANGUAGE]);

	return (
		<>
			<Head>
				<title>Weather Forecast App | Forecast</title>
			</Head>
			<div className="static w-screen h-screen">
				<Map />
				<Layer customClassName={`left-0 bottom-0 w-full sm:w-80 p-4 space-y-2`}>
					{weather && <Card />}
					<Footer />
				</Layer>
				{/* {announcementsList[settings.LANGUAGE.abreviation].length != 0 && (
					<Layer customClassName="top-0 h-6 w-full">
						<Announcements announcements={announcementsList} />
					</Layer>
				)} */}
				{alerts &&
					alerts.length != 0 &&
					alerts.map((alert, idx) => (
						<Layer
							key={idx}
							customClassName="left-0 bottom-0 w-full sm:w-80 p-4"
						>
							<div className="h-14">
								<Alert alert={alert} />
							</div>
						</Layer>
					))}
			</div>
		</>
	);
};

export async function getServerSideProps() {
	try {
		let client = createClient({
			space: process.env.SPACE,
			accessToken: process.env.ACCESS_TOKEN,
		});

		let { items: faq } = await client.getEntries({ content_type: 'faq' });
		let { items: announcements } = await client.getEntries({
			content_type: 'announcement',
		});

		faq = reShapeFAQ(faq);
		announcements = reShapeAnnouncements(announcements);

		return {
			props: {
				FAQList: faq,
				announcementsList: announcements,
			},
		};
	} catch (error) {
		console.error(error);
	}

	return { props: {} };
}

export default Index;

let reShapeFAQ = faq => {
	let reShapedFAQ = {};
	Object.keys(LANGUAGES).forEach(language => {
		reShapedFAQ[language] = faq.filter(
			question => question.fields.language === language
		);
	});

	Object.keys(LANGUAGES).forEach(language => {
		reShapedFAQ[language] = reShapedFAQ[language].map(faq => faq.fields);
	});

	return reShapedFAQ;
};

let reShapeAnnouncements = announcements => {
	let reShapedAnnoucements = {};
	Object.keys(LANGUAGES).forEach(language => {
		reShapedAnnoucements[language] = announcements.filter(
			announcement => announcement.fields.language === language
		);
	});

	Object.keys(LANGUAGES).forEach(language => {
		reShapedAnnoucements[language] = reShapedAnnoucements[language].map(
			announcement => announcement.fields
		);
	});

	return reShapedAnnoucements;
};

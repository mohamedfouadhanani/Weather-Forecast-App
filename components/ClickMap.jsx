import { useMapEvents } from 'react-leaflet';

import { useCoordinates } from '../contexts/Coordinates';

import * as gtag from '../lib/gtag';

function ClickMap() {
	let { setCoordinates } = useCoordinates();
	const map = useMapEvents({
		click(e) {
			let tatitude = e.latlng.lat;
			let longitude = e.latlng.lng;
			let date = new Date().toISOString();

			let message = `User checked weather at ${tatitude}, ${longitude} at ${date}`;

			gtag.event({
				action: 'check_location',
				category: 'engagement',
				label: 'Check Location',
				value: message,
			});

			setCoordinates([e.latlng.lat, e.latlng.lng]);
		},
	});

	return null;
}

export default ClickMap;

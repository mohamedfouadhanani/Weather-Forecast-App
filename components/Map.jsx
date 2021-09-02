import { MapContainer, Marker, TileLayer } from 'react-leaflet';

// COMPONENTS
import ClickMap from './ClickMap';

// CONTEXT
import { useCoordinates } from '../contexts/Coordinates';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

let Map = () => {
	let { coordinates } = useCoordinates();

	return (
		<MapContainer
			center={[30, 0]}
			zoom={3}
			scrollWheelZoom={true}
			className="h-screen w-screen"
			zoomControl={false}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{coordinates && <Marker position={coordinates}></Marker>}
			<ClickMap />
		</MapContainer>
	);
};

export default Map;

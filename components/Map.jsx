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
			center={[0, 0]}
			zoom={3}
			scrollWheelZoom={true}
			className="h-screen w-screen"
			zoomControl={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
				url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
			/>
			{coordinates && <Marker position={coordinates}></Marker>}
			<ClickMap />
		</MapContainer>
	);
};

export default Map;

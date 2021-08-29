import { createContext, useContext, useState } from 'react';

export let coordinatesContext = createContext(null);

export default function CoordinatesProvider({ children }) {
	let [coordinates, setCoordinates] = useState(null);
	return (
		<coordinatesContext.Provider value={{ coordinates, setCoordinates }}>
			{children}
		</coordinatesContext.Provider>
	);
}

export let useCoordinates = () => {
	let context = useContext(coordinatesContext);
	return context;
};

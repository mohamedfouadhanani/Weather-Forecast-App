import { createContext, useContext, useState } from 'react';

export let alertsContext = createContext(null);

export default function AlertsProvider({ children }) {
	let [alerts, setAlerts] = useState([]);

	return (
		<alertsContext.Provider value={{ alerts, setAlerts }}>
			{children}
		</alertsContext.Provider>
	);
}

export let useAlerts = () => {
	let context = useContext(alertsContext);
	return context;
};

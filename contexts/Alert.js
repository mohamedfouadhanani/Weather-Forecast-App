import { createContext, useContext, useState } from 'react';

export let alertContext = createContext(null);

export default function AlertProvider({ children }) {
	let [alert, setAlert] = useState(null);

	return (
		<alertContext.Provider value={{ alert, setAlert }}>
			{children}
		</alertContext.Provider>
	);
}

export let useAlert = () => {
	let context = useContext(alertContext);
	return context;
};

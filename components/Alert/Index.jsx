import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useAlerts } from '../../contexts/Alerts';

let Alert = ({ alert }) => {
	let { alerts, setAlerts } = useAlerts();
	let { type, message } = alert;

	let components = {
		ERROR: {
			name: 'error',
			className: {
				dangerAlertWrapper: 'bg-red-500 ring-red-500',
				dangerAlertBtn: 'hover:bg-red-600',
			},
		},
		SUCCESS: {
			name: 'success',
			className: {
				dangerAlertWrapper: 'bg-green-800 ring-green-800',
				dangerAlertBtn: 'hover:bg-green-900',
			},
		},
		INFO: {
			name: 'info',
			className: {
				dangerAlertWrapper: 'bg-blue-800 ring-blue-800',
				dangerAlertBtn: 'hover:bg-blue-900',
			},
		},
	};

	type = type.toUpperCase();

	useEffect(() => {
		let timer = setTimeout(() => {
			let newAlert = alerts.filter(
				alert => alert.type !== type && alert.message !== message
			);
			setAlerts(newAlert);
		}, 5000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div
			className={`${components[type].className.dangerAlertWrapper} w-full h-full text-white flex items-center overflow-y-auto pl-4 pr-2 rounded-md ring-1`}
		>
			<div className="flex-1 h-full flex flex-col justify-center">
				<span className="text-xs">{message}</span>
			</div>
			<div>
				<button
					onClick={() => {
						let newAlert = alerts.filter(
							alert => alert.type !== type && alert.message !== message
						);
						setAlerts(newAlert);
					}}
					className={`${components[type].className.dangerAlertBtn} hover:text-gray-200 p-2 rounded-md transition-all`}
				>
					<Icon className="h-4 w-4" icon="heroicons-solid:x" />
				</button>
			</div>
		</div>
	);
};

export default Alert;

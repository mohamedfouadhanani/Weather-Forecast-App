import { Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { Fragment, useEffect, useState } from 'react';
import { useAlerts } from '../../contexts/Alerts';

let Alert = ({ alert }) => {
	let [isShowing, setIsShowing] = useState(true);
	let { alerts, setAlerts } = useAlerts();
	let { id, type, message } = alert;

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
		let timerTwo;
		let timer = setTimeout(() => {
			setIsShowing(false);

			timerTwo = setTimeout(() => {
				let newAlert = alerts.filter(alert => alert.id !== id);

				setAlerts(newAlert);
			}, 350);
		}, 5000);

		return () => {
			clearTimeout(timer);
			clearTimeout(timerTwo);
		};
	}, []);

	useEffect(() => {
		console.log(alerts);
	}, [alerts]);

	return (
		<Transition
			as={Fragment}
			enter="transition transform duration-300 ease-out"
			enterFrom="-translate-x-4 opacity-0"
			enterTo="translate-x-0 opacity-100"
			leave="transition transform duration-300 ease-in"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
			show={isShowing}
			appear={true}
		>
			<div
				className={`${components[type].className.dangerAlertWrapper} w-full h-full text-white flex items-center overflow-y-auto pl-4 pr-2 rounded-md ring-1`}
			>
				<div className="flex-1 h-full flex flex-col justify-center">
					<span className="text-xs">{message}</span>
				</div>
				<div>
					<button
						onClick={() => {
							setIsShowing(false);

							let newAlert = alerts.filter(alert => alert.id !== id);

							setAlerts(newAlert);
						}}
						className={`${components[type].className.dangerAlertBtn} hover:text-gray-200 p-2 rounded-md transition-all`}
					>
						<Icon className="h-4 w-4" icon="heroicons-solid:x" />
					</button>
				</div>
			</div>
		</Transition>
	);
};

export default Alert;

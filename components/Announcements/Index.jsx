import { useEffect, useRef, useState } from 'react';

// CONTEXTS
import { useSettings } from '../../contexts/Settings';

let Announcements = ({ announcements }) => {
	let { settings } = useSettings();

	let [announcement, setAnnouncement] = useState(
		announcements[settings.LANGUAGE.abreviation][0]
	);

	let index = useRef(0);

	useEffect(() => {
		let newAnnouncement =
			announcements[settings.LANGUAGE.abreviation][index.current];
		setAnnouncement(newAnnouncement);

		let timer = setInterval(() => {
			let idx = index.current;

			idx = (idx + 1) % announcements[settings.LANGUAGE.abreviation].length;

			index.current = idx;

			let newAnnouncement = announcements[settings.LANGUAGE.abreviation][idx];
			setAnnouncement(newAnnouncement);
		}, 5000);

		return () => clearInterval(timer);
	}, [settings.LANGUAGE]);

	return (
		<div
			className={`bg-blue-800 w-full h-full text-white flex items-center overflow-y-auto justify-between px-4`}
		>
			<div className="mx-auto">
				<span className="text-sm">{announcement.content}</span>
			</div>
		</div>
	);
};

export default Announcements;

import WeekForecastCard from './WeekForecastCard';
import ScrollContainer from 'react-indiana-drag-scroll';

import { useWeather } from '../../../../../contexts/Weather';
import { useSettings } from '../../../../../contexts/Settings';

let WeekForecast = () => {
	let { weather, setWeather, weatherList } = useWeather();
	let { settings } = useSettings();
	let units = settings.UNITS.name.toUpperCase();

	return (
		<ScrollContainer
			vertical={false}
			hideScrollbars={true}
			className="p-2 h-2/5 flex space-x-2 w-full"
		>
			{weatherList &&
				weatherList.map((weatherItem, index) => (
					<WeekForecastCard
						highest={weatherItem[units].highest}
						lowest={weatherItem[units].lowest}
						description={weatherItem.description}
						date={weatherItem.date}
						key={index}
						isSelected={weatherItem.date === weather.date}
						onClick={date => {
							let selectedWeather = weatherList.find(
								weather => weather.date === date
							);
							setWeather(selectedWeather);
						}}
					/>
				))}
		</ScrollContainer>
	);
};

export default WeekForecast;

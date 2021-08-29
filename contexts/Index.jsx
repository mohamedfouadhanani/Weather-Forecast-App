import dynamic from 'next/dynamic';

import TabProvider from './Tab';
import CoordinatesProvider from './Coordinates';
import SettingsProvider from './Settings';
import WeatherProvider from './Weather';
import AlertProvider from './Alert';
import FAQProvider from './FAQ';
import AlertsProvider from './Alerts';

let ThemeProvider = dynamic(() => import('./Theme'), {
	ssr: false,
});

let ContextsProvider = ({ children }) => {
	return (
		<ThemeProvider>
			<TabProvider>
				<CoordinatesProvider>
					<SettingsProvider>
						<WeatherProvider>
							<AlertProvider>
								<FAQProvider>
									<AlertsProvider>{children}</AlertsProvider>
								</FAQProvider>
							</AlertProvider>
						</WeatherProvider>
					</SettingsProvider>
				</CoordinatesProvider>
			</TabProvider>
		</ThemeProvider>
	);
};

export default ContextsProvider;

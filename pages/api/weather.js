import axios from 'axios';

let key = process.env.WEATHER_API_KEY;
let revGeoKey = process.env.REV_GEO_API_KEY;

let language = {
	EN: 'en-US',
	FR: 'fr-FR',
	ES: 'es-ES',
};

export default async function handler(req, res) {
	let { latitude, longitude, language } = req.body;

	let addressURL = `https://revgeocode.search.hereapi.com/v1/revgeocode?lang=${language}&at=${latitude}%2C${longitude}&apikey=${revGeoKey}`;

	let weatherURL = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latitude},${longitude}&days=7&aqi=no&alerts=no&lang=${language}`;

	let data = null;
	try {
		let addressResponse = await axios.get(addressURL);

		let county = addressResponse.data.items[0].address.county;
		let countryCode = addressResponse.data.items[0].address.countryCode;
		// let state = addressResponse.data.items[0].address.state;
		// let location = `${county}, ${state}, ${countryCode}`;

		let location = `${county}, ${countryCode}`;

		let weatherResponse = await axios.get(weatherURL);

		data = reShape({
			location,
			weather: weatherResponse.data,
		});
	} catch (error) {
		console.log(error);
	}
	res.json(data);
}

let reShape = ({ location, weather }) => {
	let WeatherListShaped = weather.forecast.forecastday.map(day => {
		return {
			location,
			description: day.day.condition.text,
			date: day.date,
			humidity: Math.round(day.day.avghumidity),
			uv: day.hour.map(hour => {
				return {
					time: hour.time.split(' ')[1],
					uv: hour.uv,
				};
			}),
			METRICS: {
				highest: Math.round(day.day.maxtemp_c),
				lowest: Math.round(day.day.mintemp_c),
				avgerage: Math.round(day.day.avgtemp_c),
				wind: Math.round(day.day.maxwind_kph),
				precipitation: Math.round(day.day.totalprecip_mm),
				hourly: day.hour.map(hour => {
					return {
						time: hour.time.split(' ')[1],
						temperature: Math.round(hour.temp_c),
					};
				}),
			},
			IMPERIAL: {
				highest: Math.round(day.day.maxtemp_f),
				lowest: Math.round(day.day.mintemp_f),
				avgerage: Math.round(day.day.avgtemp_f),
				wind: Math.round(day.day.maxwind_mph),
				precipitation: Math.round(day.day.totalprecip_in),
				hourly: day.hour.map(hour => {
					return {
						time: hour.time.split(' ')[1],
						temperature: Math.round(hour.temp_f),
					};
				}),
			},
		};
	});
	return WeatherListShaped;
};

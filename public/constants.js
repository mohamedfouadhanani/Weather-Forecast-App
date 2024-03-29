let constants = {
	APIResponse: JSON.parse(`{
		"location": {
		"name": "Lari Addou",
		"region": "Ain Defla",
		"country": "Algeria",
		"lat": 36.35,
		"lon": 1.89,
		"tz_id": "Africa/Algiers",
		"localtime_epoch": 1629796900,
		"localtime": "2021-08-24 10:21"
		},
		"forecast": {
		"forecastday": [
		{
		"date": "2021-08-24",
		"date_epoch": 1629763200,
		"day": {
		"maxtemp_c": 36.8,
		"maxtemp_f": 98.2,
		"mintemp_c": 26.3,
		"mintemp_f": 79.3,
		"avgtemp_c": 32.5,
		"avgtemp_f": 90.6,
		"maxwind_mph": 6.9,
		"maxwind_kph": 11.2,
		"totalprecip_mm": 0,
		"totalprecip_in": 0,
		"avgvis_km": 9.9,
		"avgvis_miles": 6,
		"avghumidity": 39,
		"condition": {
		"text": "Thundery outbreaks possible",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/200.png",
		"code": 1087
		},
		"uv": 0
		},
		"astro": {},
		"hour": [
		{
		"time_epoch": 1629759600,
		"time": "2021-08-24 00:00",
		"temp_c": 28.2,
		"temp_f": 82.8,
		"is_day": 0,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
		"code": 1003
		},
		"wind_mph": 4,
		"wind_kph": 6.5,
		"wind_degree": 62,
		"wind_dir": "ENE",
		"pressure_mb": 1012,
		"pressure_in": 29.88,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 50,
		"cloud": 9,
		"feelslike_c": 29.6,
		"feelslike_f": 85.3,
		"windchill_c": 28.2,
		"windchill_f": 82.8,
		"heatindex_c": 29.6,
		"heatindex_f": 85.3,
		"dewpoint_c": 15.3,
		"dewpoint_f": 59.5,
		"will_it_rain": 0,
		"chance_of_rain": 0,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 8.5,
		"gust_kph": 13.7
		},
		{
		"time_epoch": 1629763200,
		"time": "2021-08-24 01:00",
		"temp_c": 27.6,
		"temp_f": 81.6,
		"is_day": 0,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
		"code": 1003
		},
		"wind_mph": 3.6,
		"wind_kph": 5.8,
		"wind_degree": 61,
		"wind_dir": "ENE",
		"pressure_mb": 1012,
		"pressure_in": 29.88,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 49,
		"cloud": 15,
		"feelslike_c": 28.6,
		"feelslike_f": 83.5,
		"windchill_c": 27.6,
		"windchill_f": 81.6,
		"heatindex_c": 28.6,
		"heatindex_f": 83.5,
		"dewpoint_c": 14.7,
		"dewpoint_f": 58.5,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 7.5,
		"gust_kph": 12.1
		},
		{
		"time_epoch": 1629766800,
		"time": "2021-08-24 02:00",
		"temp_c": 26.9,
		"temp_f": 80.5,
		"is_day": 0,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
		"code": 1003
		},
		"wind_mph": 3.1,
		"wind_kph": 5,
		"wind_degree": 60,
		"wind_dir": "ENE",
		"pressure_mb": 1012,
		"pressure_in": 29.87,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 47,
		"cloud": 21,
		"feelslike_c": 27.6,
		"feelslike_f": 81.7,
		"windchill_c": 26.9,
		"windchill_f": 80.5,
		"heatindex_c": 27.6,
		"heatindex_f": 81.7,
		"dewpoint_c": 14.1,
		"dewpoint_f": 57.4,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 6.6,
		"gust_kph": 10.6
		},
		{
		"time_epoch": 1629770400,
		"time": "2021-08-24 03:00",
		"temp_c": 26.3,
		"temp_f": 79.3,
		"is_day": 0,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
		"code": 1003
		},
		"wind_mph": 2.7,
		"wind_kph": 4.3,
		"wind_degree": 59,
		"wind_dir": "ENE",
		"pressure_mb": 1011,
		"pressure_in": 29.86,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 45,
		"cloud": 27,
		"feelslike_c": 26.6,
		"feelslike_f": 79.9,
		"windchill_c": 26.3,
		"windchill_f": 79.3,
		"heatindex_c": 26.6,
		"heatindex_f": 79.9,
		"dewpoint_c": 13.5,
		"dewpoint_f": 56.3,
		"will_it_rain": 0,
		"chance_of_rain": 0,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 5.6,
		"gust_kph": 9
		},
		{
		"time_epoch": 1629774000,
		"time": "2021-08-24 04:00",
		"temp_c": 26.3,
		"temp_f": 79.3,
		"is_day": 0,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
		"code": 1003
		},
		"wind_mph": 3.1,
		"wind_kph": 5,
		"wind_degree": 123,
		"wind_dir": "ESE",
		"pressure_mb": 1012,
		"pressure_in": 29.87,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 46,
		"cloud": 32,
		"feelslike_c": 26.6,
		"feelslike_f": 79.9,
		"windchill_c": 26.3,
		"windchill_f": 79.3,
		"heatindex_c": 26.6,
		"heatindex_f": 79.9,
		"dewpoint_c": 13.7,
		"dewpoint_f": 56.6,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 6,
		"gust_kph": 9.7
		},
		{
		"time_epoch": 1629777600,
		"time": "2021-08-24 05:00",
		"temp_c": 26.3,
		"temp_f": 79.3,
		"is_day": 0,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
		"code": 1003
		},
		"wind_mph": 3.6,
		"wind_kph": 5.8,
		"wind_degree": 187,
		"wind_dir": "S",
		"pressure_mb": 1012,
		"pressure_in": 29.88,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 46,
		"cloud": 37,
		"feelslike_c": 26.7,
		"feelslike_f": 80,
		"windchill_c": 26.3,
		"windchill_f": 79.3,
		"heatindex_c": 26.7,
		"heatindex_f": 80,
		"dewpoint_c": 13.8,
		"dewpoint_f": 56.9,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 6.5,
		"gust_kph": 10.4
		},
		{
		"time_epoch": 1629781200,
		"time": "2021-08-24 06:00",
		"temp_c": 26.3,
		"temp_f": 79.3,
		"is_day": 0,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
		"code": 1003
		},
		"wind_mph": 4,
		"wind_kph": 6.5,
		"wind_degree": 251,
		"wind_dir": "WSW",
		"pressure_mb": 1012,
		"pressure_in": 29.89,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 47,
		"cloud": 42,
		"feelslike_c": 26.7,
		"feelslike_f": 80.1,
		"windchill_c": 26.3,
		"windchill_f": 79.3,
		"heatindex_c": 26.7,
		"heatindex_f": 80.1,
		"dewpoint_c": 14,
		"dewpoint_f": 57.2,
		"will_it_rain": 0,
		"chance_of_rain": 0,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 6.9,
		"gust_kph": 11.2
		},
		{
		"time_epoch": 1629784800,
		"time": "2021-08-24 07:00",
		"temp_c": 27.5,
		"temp_f": 81.5,
		"is_day": 1,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
		"code": 1003
		},
		"wind_mph": 4.1,
		"wind_kph": 6.6,
		"wind_degree": 259,
		"wind_dir": "W",
		"pressure_mb": 1012,
		"pressure_in": 29.89,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 44,
		"cloud": 44,
		"feelslike_c": 27.7,
		"feelslike_f": 81.9,
		"windchill_c": 27.5,
		"windchill_f": 81.5,
		"heatindex_c": 27.7,
		"heatindex_f": 81.9,
		"dewpoint_c": 14,
		"dewpoint_f": 57.2,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 6.6,
		"gust_kph": 10.6
		},
		{
		"time_epoch": 1629788400,
		"time": "2021-08-24 08:00",
		"temp_c": 28.7,
		"temp_f": 83.7,
		"is_day": 1,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
		"code": 1003
		},
		"wind_mph": 4.2,
		"wind_kph": 6.7,
		"wind_degree": 267,
		"wind_dir": "W",
		"pressure_mb": 1012,
		"pressure_in": 29.89,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 41,
		"cloud": 45,
		"feelslike_c": 28.8,
		"feelslike_f": 83.8,
		"windchill_c": 28.7,
		"windchill_f": 83.7,
		"heatindex_c": 28.8,
		"heatindex_f": 83.8,
		"dewpoint_c": 14,
		"dewpoint_f": 57.2,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 6.2,
		"gust_kph": 10
		},
		{
		"time_epoch": 1629792000,
		"time": "2021-08-24 09:00",
		"temp_c": 29.9,
		"temp_f": 85.8,
		"is_day": 1,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
		"code": 1003
		},
		"wind_mph": 4.3,
		"wind_kph": 6.8,
		"wind_degree": 275,
		"wind_dir": "W",
		"pressure_mb": 1012,
		"pressure_in": 29.89,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 39,
		"cloud": 47,
		"feelslike_c": 29.8,
		"feelslike_f": 85.6,
		"windchill_c": 29.9,
		"windchill_f": 85.8,
		"heatindex_c": 29.8,
		"heatindex_f": 85.6,
		"dewpoint_c": 14,
		"dewpoint_f": 57.2,
		"will_it_rain": 0,
		"chance_of_rain": 0,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 5.8,
		"gust_kph": 9.4
		},
		{
		"time_epoch": 1629795600,
		"time": "2021-08-24 10:00",
		"temp_c": 31.5,
		"temp_f": 88.6,
		"is_day": 1,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
		"code": 1003
		},
		"wind_mph": 3.9,
		"wind_kph": 6.2,
		"wind_degree": 282,
		"wind_dir": "WNW",
		"pressure_mb": 1012,
		"pressure_in": 29.88,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 35,
		"cloud": 48,
		"feelslike_c": 31.2,
		"feelslike_f": 88.2,
		"windchill_c": 31.5,
		"windchill_f": 88.6,
		"heatindex_c": 31.2,
		"heatindex_f": 88.2,
		"dewpoint_c": 13.5,
		"dewpoint_f": 56.4,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 5.1,
		"gust_kph": 8.2
		},
		{
		"time_epoch": 1629799200,
		"time": "2021-08-24 11:00",
		"temp_c": 33,
		"temp_f": 91.5,
		"is_day": 1,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
		"code": 1003
		},
		"wind_mph": 3.5,
		"wind_kph": 5.6,
		"wind_degree": 288,
		"wind_dir": "WNW",
		"pressure_mb": 1012,
		"pressure_in": 29.87,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 31,
		"cloud": 49,
		"feelslike_c": 32.6,
		"feelslike_f": 90.7,
		"windchill_c": 33,
		"windchill_f": 91.5,
		"heatindex_c": 32.6,
		"heatindex_f": 90.7,
		"dewpoint_c": 13.1,
		"dewpoint_f": 55.5,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 4.3,
		"gust_kph": 7
		},
		{
		"time_epoch": 1629802800,
		"time": "2021-08-24 12:00",
		"temp_c": 34.6,
		"temp_f": 94.3,
		"is_day": 1,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
		"code": 1003
		},
		"wind_mph": 3.1,
		"wind_kph": 5,
		"wind_degree": 295,
		"wind_dir": "WNW",
		"pressure_mb": 1011,
		"pressure_in": 29.86,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 27,
		"cloud": 49,
		"feelslike_c": 34,
		"feelslike_f": 93.2,
		"windchill_c": 34.6,
		"windchill_f": 94.3,
		"heatindex_c": 34,
		"heatindex_f": 93.2,
		"dewpoint_c": 12.6,
		"dewpoint_f": 54.7,
		"will_it_rain": 0,
		"chance_of_rain": 0,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 3.6,
		"gust_kph": 5.8
		},
		{
		"time_epoch": 1629806400,
		"time": "2021-08-24 13:00",
		"temp_c": 35.3,
		"temp_f": 95.6,
		"is_day": 1,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
		"code": 1003
		},
		"wind_mph": 3.8,
		"wind_kph": 6.1,
		"wind_degree": 243,
		"wind_dir": "WSW",
		"pressure_mb": 1011,
		"pressure_in": 29.84,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 26,
		"cloud": 48,
		"feelslike_c": 34.7,
		"feelslike_f": 94.5,
		"windchill_c": 35.3,
		"windchill_f": 95.6,
		"heatindex_c": 34.7,
		"heatindex_f": 94.5,
		"dewpoint_c": 12.5,
		"dewpoint_f": 54.6,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 9.8,
		"vis_miles": 6,
		"gust_mph": 4.4,
		"gust_kph": 7.1
		},
		{
		"time_epoch": 1629810000,
		"time": "2021-08-24 14:00",
		"temp_c": 36.1,
		"temp_f": 96.9,
		"is_day": 1,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
		"code": 1003
		},
		"wind_mph": 4.5,
		"wind_kph": 7.2,
		"wind_degree": 190,
		"wind_dir": "S",
		"pressure_mb": 1010,
		"pressure_in": 29.82,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 24,
		"cloud": 47,
		"feelslike_c": 35.5,
		"feelslike_f": 95.8,
		"windchill_c": 36.1,
		"windchill_f": 96.9,
		"heatindex_c": 35.5,
		"heatindex_f": 95.8,
		"dewpoint_c": 12.5,
		"dewpoint_f": 54.4,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 9.5,
		"vis_miles": 5,
		"gust_mph": 5.2,
		"gust_kph": 8.4
		},
		{
		"time_epoch": 1629813600,
		"time": "2021-08-24 15:00",
		"temp_c": 36.8,
		"temp_f": 98.2,
		"is_day": 1,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
		"code": 1003
		},
		"wind_mph": 5.1,
		"wind_kph": 8.3,
		"wind_degree": 138,
		"wind_dir": "SE",
		"pressure_mb": 1009,
		"pressure_in": 29.8,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 23,
		"cloud": 46,
		"feelslike_c": 36.2,
		"feelslike_f": 97.2,
		"windchill_c": 36.8,
		"windchill_f": 98.2,
		"heatindex_c": 36.2,
		"heatindex_f": 97.2,
		"dewpoint_c": 12.4,
		"dewpoint_f": 54.3,
		"will_it_rain": 0,
		"chance_of_rain": 0,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 9.3,
		"vis_miles": 5,
		"gust_mph": 6,
		"gust_kph": 9.7
		},
		{
		"time_epoch": 1629817200,
		"time": "2021-08-24 16:00",
		"temp_c": 36.2,
		"temp_f": 97.2,
		"is_day": 1,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
		"code": 1003
		},
		"wind_mph": 5.7,
		"wind_kph": 9.2,
		"wind_degree": 105,
		"wind_dir": "ESE",
		"pressure_mb": 1009,
		"pressure_in": 29.79,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 27,
		"cloud": 39,
		"feelslike_c": 36.4,
		"feelslike_f": 97.6,
		"windchill_c": 36.2,
		"windchill_f": 97.2,
		"heatindex_c": 36.4,
		"heatindex_f": 97.6,
		"dewpoint_c": 13.4,
		"dewpoint_f": 56.1,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 9.4,
		"vis_miles": 5,
		"gust_mph": 7,
		"gust_kph": 11.3
		},
		{
		"time_epoch": 1629820800,
		"time": "2021-08-24 17:00",
		"temp_c": 35.7,
		"temp_f": 96.2,
		"is_day": 1,
		"condition": {
		"text": "Thundery outbreaks possible",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/200.png",
		"code": 1087
		},
		"wind_mph": 6.3,
		"wind_kph": 10.2,
		"wind_degree": 71,
		"wind_dir": "ENE",
		"pressure_mb": 1009,
		"pressure_in": 29.78,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 31,
		"cloud": 31,
		"feelslike_c": 36.7,
		"feelslike_f": 98,
		"windchill_c": 35.7,
		"windchill_f": 96.2,
		"heatindex_c": 36.7,
		"heatindex_f": 98,
		"dewpoint_c": 14.3,
		"dewpoint_f": 57.8,
		"will_it_rain": 0,
		"chance_of_rain": 29,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 9.6,
		"vis_miles": 5,
		"gust_mph": 8,
		"gust_kph": 12.8
		},
		{
		"time_epoch": 1629824400,
		"time": "2021-08-24 18:00",
		"temp_c": 35.1,
		"temp_f": 95.2,
		"is_day": 1,
		"condition": {
		"text": "Thundery outbreaks possible",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/200.png",
		"code": 1087
		},
		"wind_mph": 6.9,
		"wind_kph": 11.2,
		"wind_degree": 38,
		"wind_dir": "NE",
		"pressure_mb": 1008,
		"pressure_in": 29.77,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 35,
		"cloud": 24,
		"feelslike_c": 36.9,
		"feelslike_f": 98.4,
		"windchill_c": 35.1,
		"windchill_f": 95.2,
		"heatindex_c": 36.9,
		"heatindex_f": 98.4,
		"dewpoint_c": 15.3,
		"dewpoint_f": 59.5,
		"will_it_rain": 0,
		"chance_of_rain": 0,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 9.7,
		"vis_miles": 6,
		"gust_mph": 8.9,
		"gust_kph": 14.4
		},
		{
		"time_epoch": 1629828000,
		"time": "2021-08-24 19:00",
		"temp_c": 34.3,
		"temp_f": 93.8,
		"is_day": 1,
		"condition": {
		"text": "Thundery outbreaks possible",
		"icon": "//cdn.weatherapi.com/weather/64x64/day/200.png",
		"code": 1087
		},
		"wind_mph": 5.9,
		"wind_kph": 9.5,
		"wind_degree": 52,
		"wind_dir": "NE",
		"pressure_mb": 1009,
		"pressure_in": 29.79,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 38,
		"cloud": 28,
		"feelslike_c": 36.7,
		"feelslike_f": 98.1,
		"windchill_c": 34.3,
		"windchill_f": 93.8,
		"heatindex_c": 36.7,
		"heatindex_f": 98.1,
		"dewpoint_c": 15.4,
		"dewpoint_f": 59.7,
		"will_it_rain": 0,
		"chance_of_rain": 29,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 9.8,
		"vis_miles": 6,
		"gust_mph": 8,
		"gust_kph": 12.8
		},
		{
		"time_epoch": 1629831600,
		"time": "2021-08-24 20:00",
		"temp_c": 33.6,
		"temp_f": 92.4,
		"is_day": 0,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
		"code": 1003
		},
		"wind_mph": 4.8,
		"wind_kph": 7.8,
		"wind_degree": 66,
		"wind_dir": "ENE",
		"pressure_mb": 1009,
		"pressure_in": 29.8,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 42,
		"cloud": 31,
		"feelslike_c": 36.6,
		"feelslike_f": 97.8,
		"windchill_c": 33.6,
		"windchill_f": 92.4,
		"heatindex_c": 36.6,
		"heatindex_f": 97.8,
		"dewpoint_c": 15.5,
		"dewpoint_f": 59.9,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 9.9,
		"vis_miles": 6,
		"gust_mph": 7,
		"gust_kph": 11.3
		},
		{
		"time_epoch": 1629835200,
		"time": "2021-08-24 21:00",
		"temp_c": 32.8,
		"temp_f": 91,
		"is_day": 0,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
		"code": 1003
		},
		"wind_mph": 3.8,
		"wind_kph": 6.1,
		"wind_degree": 81,
		"wind_dir": "E",
		"pressure_mb": 1010,
		"pressure_in": 29.82,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 45,
		"cloud": 35,
		"feelslike_c": 36.4,
		"feelslike_f": 97.5,
		"windchill_c": 32.8,
		"windchill_f": 91,
		"heatindex_c": 36.4,
		"heatindex_f": 97.5,
		"dewpoint_c": 15.6,
		"dewpoint_f": 60.1,
		"will_it_rain": 0,
		"chance_of_rain": 0,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 6,
		"gust_kph": 9.7
		},
		{
		"time_epoch": 1629838800,
		"time": "2021-08-24 22:00",
		"temp_c": 31.5,
		"temp_f": 88.7,
		"is_day": 0,
		"condition": {
		"text": "Partly cloudy",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
		"code": 1003
		},
		"wind_mph": 4.3,
		"wind_kph": 6.8,
		"wind_degree": 111,
		"wind_dir": "ESE",
		"pressure_mb": 1010,
		"pressure_in": 29.83,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 41,
		"cloud": 41,
		"feelslike_c": 33.6,
		"feelslike_f": 92.5,
		"windchill_c": 31.5,
		"windchill_f": 88.7,
		"heatindex_c": 33.6,
		"heatindex_f": 92.5,
		"dewpoint_c": 14.1,
		"dewpoint_f": 57.4,
		"will_it_rain": 0,
		"chance_of_rain": 1,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 7.3,
		"gust_kph": 11.8
		},
		{
		"time_epoch": 1629842400,
		"time": "2021-08-24 23:00",
		"temp_c": 30.2,
		"temp_f": 86.4,
		"is_day": 0,
		"condition": {
		"text": "Patchy rain possible",
		"icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
		"code": 1063
		},
		"wind_mph": 4.7,
		"wind_kph": 7.6,
		"wind_degree": 142,
		"wind_dir": "SE",
		"pressure_mb": 1010,
		"pressure_in": 29.83,
		"precip_mm": 0,
		"precip_in": 0,
		"humidity": 37,
		"cloud": 46,
		"feelslike_c": 30.9,
		"feelslike_f": 87.6,
		"windchill_c": 30.2,
		"windchill_f": 86.4,
		"heatindex_c": 30.9,
		"heatindex_f": 87.6,
		"dewpoint_c": 12.6,
		"dewpoint_f": 54.7,
		"will_it_rain": 0,
		"chance_of_rain": 21,
		"will_it_snow": 0,
		"chance_of_snow": 0,
		"vis_km": 10,
		"vis_miles": 6,
		"gust_mph": 8.6,
		"gust_kph": 13.8
		}
		]
		}
		]
		}
	}`),

	FAQList: {
		EN: [
			{
				title: 'How to use Weather Forecast?',
				content: `Just click on the map, playaround with the settings, and that's basically it.`,
			},
		],
		FR: [
			{
				title: 'Comment utilisé Weather Forecast?',
				content: `Cliquez simplement sur la carte, jouez avec les paramètres, et c'est tout.`,
			},
		],
		ES: [
			{
				title: '¿Cómo utilizar el pronóstico del tiempo?',
				content: `Simplemente haga clic en el mapa, juegue con la configuración, y eso es básicamente todo.`,
			},
		],
	},

	UNITS: {
		METRICS: {
			name: 'Metrics',
			abreviation: 'M',
			units: {
				speed: 'km/h',
				temperature: 'C',
				distance: 'mm',
			},
		},
		IMPERIAL: {
			name: 'Imperial',
			abreviation: 'I',
			units: {
				speed: 'mph',
				temperature: 'F',
				distance: 'in',
			},
		},
	},

	LANGUAGES: {
		EN: {
			name: 'English',
			abreviation: 'EN',
			months: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			hourlyForecast: 'Hourly Forecast',
			language: 'Language',
			units: 'Units',
			timeFormat: 'Time Format',
			save: 'Save as Default Settings.',
			goBack: 'Go Back.',
			notFoundMessage: 'Page not found.',
			reset: 'Settings Reset.',
			resetError: 'No default settings.',
		},
		FR: {
			name: 'Français',
			abreviation: 'FR',
			months: [
				'Janvier',
				'Fevrier',
				'Mars',
				'Avril',
				'Mai',
				'Juin',
				'Juillet',
				'Aôut',
				'Septembre',
				'Octobre',
				'Novembre',
				'Decembre',
			],
			hourlyForecast: 'Prévision Horaire',
			language: 'Langue',
			units: 'Unités',
			timeFormat: 'Format de la Date',
			save: 'Enregistrer en tant que Paramètres par Défaut.',
			goBack: 'Retourner.',
			notFoundMessage: 'Page non trouvée.',
			reset: 'Paramètres Réinitialisés.',
			resetError: 'Pas de paramètres par défaut.',
		},
		ES: {
			name: 'Español',
			abreviation: 'ES',
			months: [
				'Enero',
				'Febrero',
				'Marzo',
				'Abril',
				'Mayo',
				'Junio',
				'Julio',
				'Agosto',
				'Septiembre',
				'Octubre',
				'Noviembre',
				'Diciembre',
			],
			hourlyForecast: 'Pronóstico por hora',
			language: 'Idioma',
			units: 'Unidades',
			timeFormat: 'Formato de Fecha',
			save: 'Guardar como Configuración Predeterminada.',
			goBack: 'Regresa.',
			notFoundMessage: 'Página no encontrada.',
			reset: 'Reiniciar la Configuracion.',
			resetError: 'Sin configuración predeterminada.',
		},
	},

	TIME: {
		12: {
			name: '12 Hours',
			abreviation: '12',
		},
		24: {
			name: '24 Hours',
			abreviation: '24',
		},
	},

	ANNOUNCEMENTS: {
		EN: [
			{
				content:
					'This website will be closed starting from the 13th July, 2024.',
			},
			{
				content:
					'This website will be closed starting from the 13th July, 2024...END',
			},
		],
		FR: [
			{
				content: 'Ce site sera fermé à partir du 13 juillet 2024.',
			},
			{
				content: 'Ce site sera fermé à partir du 13 juillet 2024...FIN',
			},
		],
		ES: [
			{
				content:
					'Este sitio web permanecerá cerrado a partir del 13 de julio de 2024.',
			},
			{
				content:
					'Este sitio web permanecerá cerrado a partir del 13 de julio de 2024...FIN',
			},
		],
	},
};

export default constants;

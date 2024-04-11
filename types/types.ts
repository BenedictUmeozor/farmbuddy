type WeatherDescription = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherInfo = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise?: number;
  moonset?: number;
  moon_phase?: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  weather: WeatherDescription[];
  clouds: number;
  pop?: number;
  rain?: number;
  uvi: number;
};

export type LocationWeather = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherInfo;
  daily: WeatherInfo[];
};

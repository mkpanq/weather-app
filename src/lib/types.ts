export type ErrorResponse = {
  error: {
    code: number;
    message: string;
  };
};

export type WeatherData = {
  location: LocationData;
  current: CurrentWeatherData;
};

type CurrentWeatherData = {
  lastUpdated: number;
  temperature: {
    celcius: number;
    fahrenheit: number;
  };
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind: {
    mph: number;
    kph: number;
    degree: number;
    direction: string;
  };
  pressure: {
    mb: number;
    in: number;
  };
  precipitation: {
    mm: number;
    in: number;
  };
  humidity: number;
  uv: number;
};

type LocationData = {
  name: string;
  region: string;
  country: string;
  localtime: number;
};

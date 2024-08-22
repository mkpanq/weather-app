import {
  ApiKeyInvalidError,
  ApiLimitationError,
  CityNotFoundError,
  DefaultError,
} from "./errors";

export type NonDataStateType = "FETCHING" | "ERROR" | "EMPTY";
export type NonDataStateData = {
  color: string;
  defaultInfo: string;
  icon: string;
};

export type WeatherAPIErrorType =
  | DefaultError
  | CityNotFoundError
  | ApiKeyInvalidError
  | ApiLimitationError;

export type ErrorResponse = {
  error: {
    code: number;
    message: string;
  };
};

export type CachedWeatherData = {
  queryKey: {
    base: string;
    city: string;
  };
  data: WeatherData;
};

export type WeatherData = {
  location: LocationData;
  current: CurrentWeatherData;
};

type CurrentWeatherData = {
  isDay: boolean;
  lastUpdated: string;
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
  localtime: string;
};

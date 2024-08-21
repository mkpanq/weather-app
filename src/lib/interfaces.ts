import { WeatherAPIErrorType, WeatherData } from "./types";

export interface IQueryData {
  isFetching: boolean;
  error: WeatherAPIErrorType | null;
  data: WeatherData | undefined;
  refetch: () => void;
}

export interface IDataStateData {
  data: WeatherData;
  refetch: () => void;
}

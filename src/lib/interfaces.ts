import { WeatherAPIErrorType, WeatherData } from "./types";

export interface IQueryData {
  isFetching: boolean;
  error: WeatherAPIErrorType | null;
  data: WeatherData | undefined;
  refetch: () => void;
}

export interface IDataDisplayData {
  data: WeatherData;
  refetch: () => void;
}

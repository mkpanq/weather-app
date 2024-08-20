import { WeatherData } from "./types";

export interface IQueryData {
  isFetching: boolean;
  error: Error | null;
  data: WeatherData | undefined;
  refetch: () => void;
}

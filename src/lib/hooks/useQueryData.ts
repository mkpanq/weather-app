import {
  QueryClient,
  QueryKey,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import getCurrentWeather from "../../api/getCurrentWeather";
import { DEFAULT_QUERY_KEY } from "../config";
import { CachedWeatherData, WeatherData } from "../types";

interface IQueryData {
  isFetching: boolean;
  error: Error | null;
  data: WeatherData | undefined;
  refetch: () => void;
  cacheData: CachedWeatherData[];
}

const useQueryData = (currentCity: string): IQueryData => {
  const queryClient = useQueryClient();

  const { isFetching, error, data, refetch } = useQuery({
    queryKey: [DEFAULT_QUERY_KEY, currentCity],
    queryFn: async () => getCurrentWeather(currentCity),
    enabled: !!currentCity,
    retry: false,
  });
  const cacheData = getQueryCacheData(queryClient);

  return { isFetching, error, data, refetch, cacheData };
};

// TODO: Remember to invalidate cache when click on one of the last 4 cities
const getQueryCacheData = (client: QueryClient): CachedWeatherData[] => {
  return client
    .getQueriesData<WeatherData>({
      queryKey: [DEFAULT_QUERY_KEY],
    })
    .filter((array) => array[1] !== undefined)
    .slice(-4)
    .reverse()
    .map((array) => {
      return {
        queryKey: array[0] as QueryKey,
        data: array[1] as WeatherData,
      };
    });
};

export default useQueryData;

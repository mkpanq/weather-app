import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import getCurrentWeather from "../../api/getCurrentWeather";
import { DEFAULT_QUERY_KEY } from "../config";
import { WeatherData } from "../types";

const useQueryData = (currentCity: string) => {
  const queryClient = useQueryClient();

  const { isFetching, error, data } = useQuery({
    queryKey: [DEFAULT_QUERY_KEY, currentCity],
    queryFn: async () => getCurrentWeather(currentCity),
    enabled: !!currentCity,
    retry: false,
  });
  const cacheData = getQueryCacheData(queryClient);

  return { isFetching, error, data, cacheData };
};

// TODO: Remember to invalidate cache when click on one of the last 4 cities
const getQueryCacheData = (client: QueryClient) => {
  return client
    .getQueriesData<WeatherData>({
      queryKey: [DEFAULT_QUERY_KEY],
    })
    .filter((array) => array[1] !== undefined)
    .slice(-4)
    .reverse();
};

export default useQueryData;

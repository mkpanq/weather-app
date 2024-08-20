import { useQueryClient } from "@tanstack/react-query";
import { DEFAULT_QUERY_KEY } from "../config";
import { CachedWeatherData, WeatherData } from "../types";

const useQueryCachedData = (): CachedWeatherData[] => {
  const client = useQueryClient();

  return client
    .getQueriesData<WeatherData>({
      queryKey: [DEFAULT_QUERY_KEY],
    })
    .filter((array) => array[1] !== undefined)
    .slice(-4)
    .reverse()
    .map((array) => {
      return {
        queryKey: {
          base: array[0][0] as string,
          city: array[0][1] as string,
        },
        data: array[1] as WeatherData,
      };
    });
};

export default useQueryCachedData;

import { useQuery } from "@tanstack/react-query";
import getCurrentWeather from "../../api/getCurrentWeather";
import { DEFAULT_QUERY_KEY } from "../config";
import { IQueryData } from "../interfaces";

const useQueryData = (currentCity: string): IQueryData => {
  const { isFetching, error, data, refetch } = useQuery({
    queryKey: [DEFAULT_QUERY_KEY, currentCity],
    queryFn: async () => getCurrentWeather(currentCity),
    enabled: !!currentCity,
    retry: false,
  });

  return { isFetching, error, data, refetch };
};

export default useQueryData;

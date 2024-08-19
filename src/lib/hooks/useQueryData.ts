import { useQuery, useQueryClient } from "@tanstack/react-query";
import getCurrentWeather from "../../api/getCurrentWeather";
import { DEFAULT_QUERY_KEY } from "../config";

const useQueryData = (currentCity: string) => {
  const queryClient = useQueryClient();

  const { isFetching, error, data } = useQuery({
    queryKey: [DEFAULT_QUERY_KEY, currentCity],
    queryFn: async () => getCurrentWeather(currentCity),
    enabled: !!currentCity,
    retry: false,
  });

  const queryData = queryClient.getQueriesData({
    queryKey: [DEFAULT_QUERY_KEY],
  });

  return { isFetching, error, data, queryData };
};

export default useQueryData;

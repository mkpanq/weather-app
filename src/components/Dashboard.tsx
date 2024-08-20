import { useState } from "react";
import useQueryData from "../lib/hooks/useQueryData";
import { SearchBar } from "./SearchBar";
import LastSearches from "./LastSearches";
import DataDisplay from "./DataDisplay";
import EmptyState from "./states/EmptyState";
import ErrorState from "./states/ErrorState";
import FetchingState from "./states/FetchingState";

const Dashboard = () => {
  const [currentCity, setCurrentCity] = useState("");
  const { isFetching, error, data, refetch } = useQueryData(currentCity);

  return (
    <div className="bg-background h-screen w-full flex flex-col">
      <div className="mx-4 my-6 space-y-2">
        <SearchBar setCurrentCity={setCurrentCity} />
        <LastSearches setCurrentCity={setCurrentCity} />
      </div>

      {/* Data display for all data */}
      {/* Emmpty state when no data is fetched */}
      {/* Error state when fetching ends with Error */}
      {/* Fetching state when refreshing / fetching data */}

      {isFetching ? (
        <FetchingState />
      ) : error ? (
        <ErrorState error={error} />
      ) : data ? (
        <DataDisplay data={data} refetch={refetch} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Dashboard;

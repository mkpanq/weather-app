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
    <div className="bg-whiteish h-full w-full flex flex-col font-poppins md:max-w-4xl md:mx-auto">
      <div className="mx-3 mt-4 flex flex-col gap-3 md:flex-row">
        <header className="border-b-0.5 border-greyish shadow-md shadow-greyish bg-secondary/70 px-4 py-4 rounded-2xl flex flex-row justify-between items-center md:w-[400px] md:grow-0">
          <div className="flex flex-col">
            <p className="font-semibold text-xl text-title">Weather Forecast</p>
            <p className="font-light text-xs text-subtitle">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <span className="icon-[wi--night-alt-cloudy-windy] text-accent text-5xl" />
        </header>
        <div className="flex flex-col gap-3 md:grow">
          <SearchBar setCurrentCity={setCurrentCity} />
          <LastSearches setCurrentCity={setCurrentCity} />
        </div>
      </div>

      {/* Data display for all data */}
      {/* Emmpty state when no data is fetched */}
      {/* Error state when fetching ends with Error */}
      {/* Fetching state when refreshing / fetching data */}
      {/* <div className="h-full">
        {isFetching ? (
          <FetchingState />
        ) : error ? (
          <ErrorState error={error} />
        ) : data ? (
          <DataDisplay data={data} refetch={refetch} />
        ) : (
          <EmptyState />
        )}
      </div> */}
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import useQueryData from "../lib/hooks/useQueryData";
import { SearchBar } from "./SearchBar";
import LastSearches from "./LastSearches";
import DataState from "./states/DataState";
import EmptyState from "./states/EmptyState";
import ErrorState from "./states/ErrorState";
import FetchingState from "./states/FetchingState";
import NonDataState from "./states/NonDataState";

const Dashboard = () => {
  const [currentCity, setCurrentCity] = useState("");
  const { isFetching, error, data, refetch } = useQueryData(currentCity);

  return (
    <div className="px-3 bg-whiteish w-full flex flex-col font-poppins md:max-w-4xl md:mx-auto md:justify-center">
      <div className="mt-6 mb-3 flex flex-col gap-3 md:grid md:grid-cols-2">
        <header className="border-b-0.5 border-greyish shadow-lg shadow-greyish bg-secondary/70 px-4 py-4 rounded-2xl flex flex-row justify-between items-center">
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

      {data ? (
        <DataState data={data} refetch={refetch} />
      ) : (
        <NonDataState
          state={isFetching ? "FETCHING" : error ? "ERROR" : "EMPTY"}
          additionalInfo={error?.message}
        />
      )}
    </div>
  );
};

export default Dashboard;

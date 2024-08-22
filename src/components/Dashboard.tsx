import { useState } from "react";
import useQueryData from "../lib/hooks/useQueryData";
import { SearchBar } from "./SearchBar";
import LastSearches from "./LastSearches";
import DataState from "./states/DataState";
import NonDataState from "./states/NonDataState";

const Dashboard = () => {
  const [currentCity, setCurrentCity] = useState("");
  const { isFetching, error, data, refetch } = useQueryData(currentCity);

  return (
    <div className="bg-whiteish w-full flex flex-col font-poppins mx-auto px-3 my-5 md:max-w-4xl">
      <div className="my-3 flex flex-col gap-3 md:grid md:grid-cols-2">
        <header className="flex flex-row px-4 py-4 justify-between items-center bg-secondary/70 border-b-0.5 rounded-2xl border-greyish shadow-lg shadow-greyish ">
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

        <div className="flex flex-col gap-3">
          <SearchBar setCurrentCity={setCurrentCity} />
          <LastSearches setCurrentCity={setCurrentCity} />
        </div>
      </div>

      {isFetching ? (
        <NonDataState state="FETCHING" />
      ) : data ? (
        <DataState data={data} refetch={refetch} />
      ) : (
        <NonDataState
          state={error ? "ERROR" : "EMPTY"}
          additionalInfo={error?.message}
        />
      )}
    </div>
  );
};

export default Dashboard;

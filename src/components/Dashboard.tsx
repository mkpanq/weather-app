import { useState } from "react";
import useQueryData from "../lib/hooks/useQueryData";
import { SearchBar } from "./SearchBar";
import LastSearches from "./LastSearches";

const Dashboard = () => {
  const [currentCity, setCurrentCity] = useState("");
  const { isFetching, error, data, refetch } = useQueryData(currentCity);

  return (
    <div className="bg-background h-screen w-screen flex flex-col">
      <div className="mx-4 my-6 space-y-2">
        <SearchBar setCurrentCity={setCurrentCity} />
        <LastSearches setCurrentCity={setCurrentCity} />
      </div>
      {JSON.stringify(data)}
    </div>
  );
};

export default Dashboard;

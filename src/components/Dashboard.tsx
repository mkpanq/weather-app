import { useState } from "react";
import useQueryData from "../lib/hooks/useQueryData";
import Header from "./Header";

const Dashboard = () => {
  const [currentCity, setCurrentCity] = useState("");
  const { isFetching, error, data, cacheData } = useQueryData(currentCity);
  return (
    <div className="bg-background h-screen w-screen flex flex-col">
      <Header setCurrentCity={setCurrentCity} cacheData={cacheData} />
    </div>
  );
};

export default Dashboard;

import { IDataStateData } from "../../lib/interfaces";
import City from "../data/City";
import Conditions from "../data/Conditions";
import WeatherGraph from "../data/Graph";

const DataState = ({ data, refetch }: IDataStateData) => {
  return (
    <div className="w-full h-full flex flex-col gap-3 md:grid md:grid-cols-2 mb-3">
      <div className="flex flex-col gap-3">
        <City data={data} refetch={refetch} />
        <Conditions data={data} />
      </div>
      <WeatherGraph weatherData={data} />
    </div>
  );
};

export default DataState;

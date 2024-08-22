import { IDataStateData } from "../../lib/interfaces";
import City from "../data/City";
import Conditions from "../data/Conditions";
import WeatherGraph from "../data/Graph";

const DataState = ({ data, refetch }: IDataStateData) => {
  return (
    <div className="space-y-3 mb-3">
      <City data={data} refetch={refetch} />
      <Conditions data={data} />
      <WeatherGraph weatherData={data} />
    </div>
  );
};

export default DataState;

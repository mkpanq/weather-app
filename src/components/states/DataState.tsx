import { IDataStateData } from "../../lib/interfaces";
import Conditions from "../data/Conditions";
import WeatherGraph from "../data/Graph";

const DataState = ({ data, refetch }: IDataStateData) => {
  return (
    <div className="space-y-3">
      <Conditions data={data} refetch={refetch} />
      <WeatherGraph weatherData={data} />
    </div>
  );
};

export default DataState;

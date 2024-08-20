import { IDataDisplayData } from "../lib/interfaces";
import WeatherGraph from "./data-display/graph";

const DataDisplay = ({ data, refetch }: IDataDisplayData) => {
  return <WeatherGraph weatherData={data} />;
};

export default DataDisplay;

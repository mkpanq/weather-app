import { IQueryData } from "../lib/interfaces";
import WeatherGraph from "./data-display/graph";

// type CurrentWeatherData = {
//   lastUpdated: string;
//   temperature: {
//     celcius: number;
//     fahrenheit: number;
//   };
//   condition: {
//     text: string;
//     icon: string;
//     code: number;
//   };
//   wind: {
//     mph: number;
//     kph: number;
//     degree: number;
//     direction: string;
//   };
//   pressure: {
//     mb: number;
//     in: number;
//   };
//   precipitation: {
//     mm: number;
//     in: number;
//   };
//   humidity: number;
//   uv: number;
// };

const DataDisplay = ({ isFetching, error, data, refetch }: IQueryData) => {
  return <div>{data && <WeatherGraph weatherData={data} />}</div>;
};

export default DataDisplay;

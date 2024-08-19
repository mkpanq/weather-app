import { ILastSearch } from "../lib/interfaces";
import { WeatherData } from "../lib/types";

const LastSearches = ({ cacheData }: ILastSearch) => {
  const testCacheData: WeatherData[] = [
    {
      location: {
        name: "Lodz",
        region: "",
        country: "Poland",
        localtime: "2024-08-19 22:00",
      },
      current: {
        lastUpdated: "2024-08-19 21:45",
        temperature: {
          celcius: 19.2,
          fahrenheit: 66.6,
        },
        condition: {
          text: "Clear",
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
          code: 1000,
        },
        wind: {
          mph: 3.8,
          kph: 6.1,
          degree: 350,
          direction: "N",
        },
        pressure: {
          mb: 1018,
          in: 30.06,
        },
        precipitation: {
          mm: 0,
          in: 0,
        },
        humidity: 68,
        uv: 1,
      },
    },
    {
      location: {
        name: "Amsterdam",
        region: "North Holland",
        country: "Netherlands",
        localtime: "2024-08-19 22:00",
      },
      current: {
        lastUpdated: "2024-08-19 21:45",
        temperature: {
          celcius: 19.1,
          fahrenheit: 66.4,
        },
        condition: {
          text: "Clear",
          icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
          code: 1000,
        },
        wind: {
          mph: 6.9,
          kph: 11.2,
          degree: 150,
          direction: "SSE",
        },
        pressure: {
          mb: 1014,
          in: 29.94,
        },
        precipitation: {
          mm: 0,
          in: 0,
        },
        humidity: 68,
        uv: 1,
      },
    },
    {
      location: {
        name: "Warszawa",
        region: "",
        country: "Poland",
        localtime: "2024-08-19 22:00",
      },
      current: {
        lastUpdated: "2024-08-19 21:45",
        temperature: {
          celcius: 21.4,
          fahrenheit: 70.5,
        },
        condition: {
          text: "Light rain shower",
          icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
          code: 1240,
        },
        wind: {
          mph: 16.1,
          kph: 25.9,
          degree: 360,
          direction: "N",
        },
        pressure: {
          mb: 1015,
          in: 29.97,
        },
        precipitation: {
          mm: 0,
          in: 0,
        },
        humidity: 83,
        uv: 1,
      },
    },
    {
      location: {
        name: "Warszawa2",
        region: "",
        country: "Poland",
        localtime: "2024-08-19 22:00",
      },
      current: {
        lastUpdated: "2024-08-19 21:45",
        temperature: {
          celcius: 21.4,
          fahrenheit: 70.5,
        },
        condition: {
          text: "Light rain shower",
          icon: "//cdn.weatherapi.com/weather/64x64/night/353.png",
          code: 1240,
        },
        wind: {
          mph: 16.1,
          kph: 25.9,
          degree: 360,
          direction: "N",
        },
        pressure: {
          mb: 1015,
          in: 29.97,
        },
        precipitation: {
          mm: 0,
          in: 0,
        },
        humidity: 83,
        uv: 1,
      },
    },
  ];

  return (
    <div className="flex flex-row justify-evenly">
      {testCacheData.map((data) => (
        <LastSearchCard key={data.location.name} {...data} />
      ))}
    </div>
  );
};

const LastSearchCard = (data: WeatherData) => {
  return (
    <div className="mx-2 my-2 p-2 border border-black rounded-xl">
      <div>{data.location.name}</div>
    </div>
  );
};

export default LastSearches;

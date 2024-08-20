import { Radar } from "react-chartjs-2";
import { WeatherData } from "../../lib/types";

const WeatherGraph = ({ weatherData }: { weatherData: WeatherData }) => {
  const temperature = weatherData.current.temperature.celcius;
  const windSpeed = weatherData.current.wind.kph;
  const humidity = weatherData.current.humidity;
  const cityName = weatherData.location.name;

  const graphData = {
    labels: ["Temperature", "Wind Speed", "Humidity"],
    datasets: [
      {
        label: `Weather in ${cityName}`,
        data: [temperature, windSpeed, humidity],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return (
    <div>
      <Radar
        data={graphData}
        options={{
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        }}
      />
    </div>
  );
};

export default WeatherGraph;

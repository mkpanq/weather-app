import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  plugins,
} from "chart.js";
import { WeatherData } from "../../lib/types";
import { color } from "chart.js/helpers";

const WeatherGraph = () => {
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);
  // const temperature = weatherData.current.temperature.celcius;
  // const windSpeed = weatherData.current.wind.kph;
  // const humidity = weatherData.current.humidity;
  // const cityName = weatherData.location.name;

  const graphData = {
    labels: ["Temperature", "Wind Speed", "Humidity"],
    datasets: [
      {
        label: "City",
        data: [3, 10, 7],
        backgroundColor: "#7284FF70",
        borderColor: "#7284FF",
        borderJoinStyle: "round" as CanvasLineJoin,
        borderWidth: 5,
        pointRadius: 0,
      },
    ],
  };

  const graphOptions = {
    scales: {
      r: {
        grid: {
          color: "#00000010",
          circular: true,
          lineWidth: 1,
        },
        angleLines: {
          display: true,
        },
        ticks: {
          display: false, // Hide the ticks
        },
        pointLabels: {
          display: true,
          font: {
            size: 12,
            weight: "bold",
          },
        },
        color: "#fff",
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
  };

  return (
    <div>
      <Radar data={graphData} options={graphOptions} />
    </div>
  );
};

export default WeatherGraph;

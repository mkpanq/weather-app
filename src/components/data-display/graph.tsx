import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { WeatherData } from "../../lib/types";
import {
  CONDITIONS_BOTTOM_RANGE_VALUE,
  CONDITIONS_TOP_RANGE_VALUE,
  GRAPH_BOTTOM_SCORE,
  GRAPH_TOP_SCORE,
} from "../../lib/config";

const graphScoreCalculation = (values: number[]): number[] => {
  return values.map((value) => {
    if (value < CONDITIONS_BOTTOM_RANGE_VALUE) return GRAPH_BOTTOM_SCORE;
    if (value > CONDITIONS_TOP_RANGE_VALUE) return GRAPH_TOP_SCORE;

    return Math.ceil(
      ((value - CONDITIONS_BOTTOM_RANGE_VALUE) /
        (CONDITIONS_TOP_RANGE_VALUE - CONDITIONS_BOTTOM_RANGE_VALUE)) *
        GRAPH_TOP_SCORE
    );
  });
};

const WeatherGraph = ({ weatherData }: { weatherData: WeatherData }) => {
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);
  const [temperatureScore, windSpeedScore, humidityScore] =
    graphScoreCalculation([
      weatherData.current.temperature.fahrenheit,
      weatherData.current.wind.kph,
      weatherData.current.humidity,
    ]);

  const graphData = {
    labels: ["Temperature", "Wind Speed", "Humidity"],
    datasets: [
      {
        data: [temperatureScore, windSpeedScore, humidityScore],
        backgroundColor: "#7284FF70",
        borderColor: "#7284FF",
        borderJoinStyle: "round" as CanvasLineJoin,
        borderWidth: 3,
        pointRadius: 0,
      },
      // Background?
      // {
      //   data: [10, 10, 10],
      //   backgroundColor: "#7284FF40",
      //   capBezierPoints: true,
      //   tension: 0.9,
      //   borderWidth: 0,
      //   pointRadius: 0,
      // },
    ],
  };

  const graphOptions = {
    scales: {
      r: {
        grid: {
          color: "#00000015",
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
          color: "black",
        },
        min: GRAPH_BOTTOM_SCORE,
        max: GRAPH_TOP_SCORE,
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

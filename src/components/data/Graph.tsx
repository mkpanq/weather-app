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
    if (value < CONDITIONS_BOTTOM_RANGE_VALUE) return 1;
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

  const darkMode = !weatherData.current.isDay;

  const graphData = {
    labels: ["Temperature", "Wind", "Humidity"],
    datasets: [
      {
        data: [temperatureScore, windSpeedScore, humidityScore],
        backgroundColor: "#D36D5899",
        borderColor: `${darkMode ? "#FCD59C" : "#75635E"}`,
        borderJoinStyle: "round" as CanvasLineJoin,
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const graphOptions = {
    scales: {
      r: {
        grid: {
          color: `${darkMode ? "#FBD477" : "#75635E70"}`,
          circular: true,
          lineWidth: 0.5,
        },
        angleLines: {
          display: true,
          color: `${darkMode ? "#FBD477" : "#75635E70"}`,
        },
        ticks: {
          stepSize: 2,
          display: false,
        },
        pointLabels: {
          color: `${darkMode ? "#FBD477" : "#75635E"}`,
          display: true,
        },
        min: GRAPH_BOTTOM_SCORE,
        max: GRAPH_TOP_SCORE,
      },
    },
  };

  return (
    <div
      className={`w-full relative p-3 ${
        darkMode ? "border-primary bg-slate-600" : "border-accent bg-primary/70"
      } border-2 rounded-xl shadow-lg`}
    >
      <Radar data={graphData} options={graphOptions} />
    </div>
  );
};

export default WeatherGraph;

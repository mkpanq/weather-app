import { WeatherAPIErrorType } from "../../lib/types";

const ErrorState = ({ error }: { error: WeatherAPIErrorType }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-accent/80 md:text-2xl text-center">
      <p>{error.message}</p>
      <span className="icon-[wi--storm-showers] text-6xl" />
    </div>
  );
};

export default ErrorState;

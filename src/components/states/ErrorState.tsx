import { WeatherAPIErrorType } from "../../lib/types";

const ErrorState = ({ error }: { error: WeatherAPIErrorType }) => {
  return (
    <div className="bg-whiteish w-full h-96 flex items-center justify-center">
      <p className="text-2xl text-primary">{error.message}</p>
    </div>
  );
};

export default ErrorState;

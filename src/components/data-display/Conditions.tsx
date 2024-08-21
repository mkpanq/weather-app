import { WEATHER_CODE_ICONS } from "../../lib/config";
import { IDataDisplayData } from "../../lib/interfaces";

const Conditions = ({ data, refetch }: IDataDisplayData) => {
  const iconSet = WEATHER_CODE_ICONS[data.current.condition.code];
  const icon = data.current.isDay ? iconSet.day : iconSet.night;
  return (
    <div className="relative w-full h-[150px] border border-secondAccent/50 border-0.5 rounded-xl shadow-lg">
      <div>
        <p>{data.location.name}</p>
        <p>
          {data.location.region
            ? [data.location.region, data.location.country].join(", ")
            : data.location.country}
        </p>
        <p>{data.current.temperature.celcius} °C</p>
        <p>{data.current.condition.text}</p>
        <p>{data.location.localtime}</p>
        <span className={`${icon} text-6xl`} />
      </div>
      <RefreshComponent refetch={refetch} />
    </div>
  );
};

export default Conditions;

const RefreshComponent = ({ refetch }: { refetch: () => void }) => {
  return (
    <button onClick={refetch} className="absolute right-0 top-0">
      <span className="icon-[wi--cloud-refresh] text-5xl text-accent" />
    </button>
  );
};

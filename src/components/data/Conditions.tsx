import { WEATHER_CODE_ICONS } from "../../lib/config";
import { IDataStateData } from "../../lib/interfaces";

const Conditions = ({ data, refetch }: IDataStateData) => {
  const iconSet = WEATHER_CODE_ICONS[data.current.condition.code];
  const icon = data.current.isDay ? iconSet.day : iconSet.night;
  const darkMode = !data.current.isDay;

  return (
    <div
      className={`relative w-full h-[150px] ${
        darkMode ? "border-primary bg-slate-600" : "border-accent bg-primary/70"
      } border-2 rounded-xl shadow-lg`}
    >
      <div
        className={`px-3 py-1 h-full ${
          darkMode ? "text-whiteish" : "text-title"
        } flex flex-col justify-between`}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <p className="text-xl font-semibold">{data.location.name}</p>
            <p className="text-[10px] font-light">
              {data.location.region
                ? [data.location.region, data.location.country].join(", ")
                : data.location.country}
            </p>
          </div>

          <button onClick={refetch}>
            <span
              className={`icon-[wi--cloud-refresh] text-3xl ${
                darkMode ? "text-primary" : "text-accent"
              }`}
            />
          </button>
        </div>

        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col tracking-wide gap-1">
            <p
              className={`${
                darkMode ? "text-primary" : "text-accent"
              } font-bold text-2xl`}
            >
              {data.current.temperature.celcius} °C /{" "}
              {data.current.temperature.fahrenheit} °F
            </p>
            <p className="font-medium">{data.current.condition.text}</p>
            <p
              className={`font-light ${
                darkMode ? "text-greyish/70" : "text-subtitle"
              } text-xs`}
            >
              {data.location.localtime}
            </p>
          </div>
          <span
            className={`${icon} ${
              darkMode ? "text-primary" : "text-accent"
            } text-8xl`}
          />
        </div>
      </div>
    </div>
  );
};

export default Conditions;

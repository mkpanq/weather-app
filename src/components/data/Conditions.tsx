import { WeatherData } from "../../lib/types";

const Conditions = ({ data }: { data: WeatherData }) => {
  const darkMode = !data.current.isDay;

  return (
    <div
      className={`grid grid-rows-2 h-full text-[10px] font-extralight divide-y *:divide-x w-full border-2 rounded-xl shadow-lg ${
        darkMode
          ? "*:divide-primary divide-primary text-whiteish border-primary bg-slate-600"
          : "*:divide-accent divide-accent text-title border-accent bg-primary/70"
      }
      `}
    >
      <div className="grid grid-cols-2 *:flex *:flex-row *:p-2 *:items-center">
        <div className="text-sm justify-around">
          <span className="icon-[wi--strong-wind] text-3xl rotate-90" />
          <div>
            <p>
              <span className="font-medium">{data.current.wind.kph}</span>{" "}
              <span className="text-xs">kph</span>
            </p>
            <p>
              <span className="font-medium">{data.current.wind.mph}</span>{" "}
              <span className="text-xs">mph</span>
            </p>
          </div>
          <div className="flex flex-col text-xl gap-1 text-center">
            <span
              className="icon-[wi--wind-direction]"
              style={{ transform: `rotate(${data.current.wind.degree}deg)` }}
            />
            <p className="font-thin">{data.current.wind.direction}</p>
          </div>
        </div>

        <div className="justify-center text-3xl">
          <span className="icon-[wi--humidity] text-5xl" />
          <p>{data.current.humidity} %</p>
        </div>
      </div>

      <div className="grid grid-cols-3 *:flex *:flex-row *:p-2 *:items-center">
        <div className="text-sm justify-evenly">
          <span className="icon-[wi--barometer] text-3xl" />
          <div>
            <p>
              <span className="font-medium">{data.current.pressure.mb}</span>{" "}
              <span className="text-xs">mBar</span>
            </p>
            <p>
              <span className="font-medium">{data.current.pressure.in}</span>{" "}
              <span className="text-xs">inHg</span>
            </p>
          </div>
        </div>

        <div className="text-sm justify-evenly">
          <span className="icon-[wi--hail] text-3xl" />
          <div>
            <p>
              <span className="font-medium">
                {data.current.precipitation.mm}
              </span>{" "}
              <span className="text-xs">mm</span>
            </p>
            <p>
              <span className="font-medium">
                {data.current.precipitation.in}
              </span>{" "}
              <span className="text-xs">in</span>
            </p>
          </div>
        </div>
        <div className="justify-evenly text-3xl">
          <span className="icon-[tabler--uv-index] text-4xl" />
          <p>{data.current.uv}</p>
        </div>
      </div>
    </div>
  );
};

export default Conditions;

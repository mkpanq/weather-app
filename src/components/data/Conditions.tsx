import { WeatherData } from "../../lib/types";

const Conditions = ({ data }: { data: WeatherData }) => {
  const darkMode = !data.current.isDay;

  return (
    <div
      className={`relative w-full h-[150px] ${
        darkMode ? "border-primary bg-slate-600" : "border-accent bg-primary/70"
      } border-2 rounded-xl shadow-lg`}
    >
      <div
        className={`grid grid-rows-2 h-full text-[10px] font-extralight divide-y  *:divide-x ${
          darkMode
            ? "*:divide-primary divide-primary text-whiteish"
            : "*:divide-accent divide-accent text-title"
        }
      `}
      >
        <div className="grid grid-cols-2">
          <div className="flex flex-row p-2 justify-between items-center  text-sm">
            <span className="icon-[wi--strong-wind] text-3xl rotate-90" />
            <div>
              <p>{data.current.wind.kph} kph</p>
              <p>{data.current.wind.mph} mph</p>
            </div>
            <div className="flex flex-row text-3xl gap-1">
              <p className="font-thin">{data.current.wind.direction}</p>
              <span
                className="icon-[wi--wind-direction]"
                style={{ transform: `rotate(${data.current.wind.degree}deg)` }}
              />
            </div>
          </div>
          <div>humidity</div>
        </div>

        <div className="grid grid-cols-3">
          <div>Presssure</div>
          <div>preper</div>
          <div>Uv</div>
        </div>
      </div>

      {/* <div className="grid grid-cols-3 grid-rows-2 h-full text-sm font-extralight *:border-accent ">
        <div className="border-b">Wind speed</div>
        <div className="border-x border-b">Wind direction</div>
        <div className="border-b">humidity</div>
        <div>Presssure</div>
        <div className="border-x">preper</div>
        <div>Uv</div>
      </div> */}
    </div>
  );
};

export default Conditions;

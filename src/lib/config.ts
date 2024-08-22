import { NonDataStateData, NonDataStateType } from "./types";

export const DEFAULT_QUERY_KEY = "current_weather";
export const CONDITIONS_BOTTOM_RANGE_VALUE = 0;
export const CONDITIONS_TOP_RANGE_VALUE = 100;
export const GRAPH_TOP_SCORE = 10;
export const GRAPH_BOTTOM_SCORE = 0;

export const NON_DATA_STATE_INFO: Record<NonDataStateType, NonDataStateData> = {
  FETCHING: {
    color: "text-primary/80",
    defaultInfo: "Loading...",
    icon: "icon-[wi--cloud-down]",
  },
  ERROR: {
    color: "text-accent/80",
    defaultInfo: "An error occurred",
    icon: "icon-[wi--storm-showers]",
  },
  EMPTY: {
    color: "text-secondAccent/50",
    defaultInfo: "No data available, please enter a city!",
    icon: "icon-[wi--cloudy]",
  },
};

export const WEATHER_CODE_ICONS: Record<
  number,
  { day: string; night: string }
> = {
  // Clear and sunny conditions, perfect weather.
  1000: {
    day: "icon-[wi--day-sunny]",
    night: "icon-[wi--moon-waning-crescent-3]",
  },

  // Partly cloudy to overcast skies, no precipitation expected.
  1003: {
    day: "icon-[wi--day-cloudy]",
    night: "icon-[wi--night-alt-cloudy]",
  },
  1006: {
    day: "icon-[wi--day-cloudy]",
    night: "icon-[wi--night-alt-cloudy]",
  },

  // Overcast
  1009: {
    day: "icon-[wi--cloud]",
    night: "icon-[wi--cloud]",
  },

  // Foggy or misty conditions, reduced visibility.
  1030: {
    day: "icon-[wi--day-fog]",
    night: "icon-[wi--night-fog]",
  },
  1135: {
    day: "icon-[wi--day-fog]",
    night: "icon-[wi--night-fog]",
  },
  1147: {
    day: "icon-[wi--day-fog]",
    night: "icon-[wi--night-fog]",
  },
  1240: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1243: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1246: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1072: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1063: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1150: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1153: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1168: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1171: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1180: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1183: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1186: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1189: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1192: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1195: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1198: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },
  1201: {
    day: "icon-[wi--rain]",
    night: "icon-[wi--rain]",
  },

  // Sleet conditions, including light and moderate sleet.
  1069: {
    day: "icon-[wi--snowflake-cold]",
    night: "icon-[wi--snowflake-cold]",
  },
  1204: {
    day: "icon-[wi--snowflake-cold]",
    night: "icon-[wi--snowflake-cold]",
  },
  1207: {
    day: "icon-[wi--snowflake-cold]",
    night: "icon-[wi--snowflake-cold]",
  },
  1249: {
    day: "icon-[wi--snowflake-cold]",
    night: "icon-[wi--snowflake-cold]",
  },
  1252: {
    day: "icon-[wi--snowflake-cold]",
    night: "icon-[wi--snowflake-cold]",
  },

  // Snowy conditions, from light snow to heavy blizzards & Hail or ice pellet showers.
  1237: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1261: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1264: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1066: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1114: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1117: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1210: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1213: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1216: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1219: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1222: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1225: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1255: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1258: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1279: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },
  1282: {
    day: "icon-[wi--snow]",
    night: "icon-[wi--snow]",
  },

  // Thunderstorms, with rain and thunder.
  1087: {
    day: "icon-[wi--storm-showers]",
    night: "icon-[wi--storm-showers]",
  },
  1273: {
    day: "icon-[wi--storm-showers]",
    night: "icon-[wi--storm-showers]",
  },
  1276: {
    day: "icon-[wi--storm-showers]",
    night: "icon-[wi--storm-showers]",
  },
};

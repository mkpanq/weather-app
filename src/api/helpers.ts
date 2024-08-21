import { WeatherData } from "../lib/types";

export const weatherDataParser = (data: any): WeatherData => {
  return {
    location: {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      localtime: data.location.localtime,
    },
    current: {
      isDay: !!data.current.is_day,
      lastUpdated: data.current.last_updated,
      temperature: {
        celcius: data.current.temp_c,
        fahrenheit: data.current.temp_f,
      },
      condition: {
        text: data.current.condition.text,
        icon: data.current.condition.icon,
        code: data.current.condition.code,
      },
      wind: {
        mph: data.current.wind_mph,
        kph: data.current.wind_kph,
        degree: data.current.wind_degree,
        direction: data.current.wind_dir,
      },
      pressure: {
        mb: data.current.pressure_mb,
        in: data.current.pressure_in,
      },
      precipitation: {
        mm: data.current.precip_mm,
        in: data.current.precip_in,
      },
      humidity: data.current.humidity,
      uv: data.current.uv,
    },
  };
};

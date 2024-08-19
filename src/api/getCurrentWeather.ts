const CURRENT_WEATHER_API_PATH = "current.json";

const getCityAPIUrl = (city: string) => {
  return `${
    import.meta.env.VITE_WEATHER_API_URL
  }/${CURRENT_WEATHER_API_PATH}?q=${city}`;
};

// TODO: Add return data type !
const getCurrentWeather = async (city: string) => {
  if (!city) {
    return;
  }
  const cityUrl = getCityAPIUrl(city);
  const response = await fetch(cityUrl, {
    headers: {
      key: import.meta.env.VITE_WEATHER_API_KEY,
    },
  });

  if (response.status != 200) {
    throw new Error("City not found");
  }

  return await response.json();
};

// TODO
const handleResponseError = (response: Response) => {};

export default getCurrentWeather;

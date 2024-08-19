import {
  CityNotFoundError,
  DefaultError,
  ApiKeyInvalidError,
  ApiLimitationError,
} from "./errors";

const CURRENT_WEATHER_API_PATH = "current.json";

type ErrorResponse = {
  error: {
    code: number;
    message: string;
  };
};

const getCityAPIUrl = (city: string) => {
  return `${
    import.meta.env.VITE_WEATHER_API_URL
  }/${CURRENT_WEATHER_API_PATH}?q=${city}`;
};

// TODO: Add return data type !
const getCurrentWeather = async (city: string) => {
  const cityUrl = getCityAPIUrl(city);
  const response = await fetch(cityUrl, {
    headers: {
      key: import.meta.env.VITE_WEATHER_API_KEY,
    },
  });

  const parsedResponse = await response.json();

  if (!response.ok) {
    const errorData = parsedResponse as ErrorResponse;
    const errorCode: number = errorData.error.code;

    switch (response.status) {
      case 400:
        if ([1003, 1006].includes(errorCode)) throw new CityNotFoundError();
        else throw new DefaultError(errorData.error.message);
      case 401:
        throw new ApiKeyInvalidError();
      case 403:
        if (errorCode === 2008) throw new ApiKeyInvalidError();
        else throw new ApiLimitationError();
      default:
        throw new DefaultError(errorData.error.message);
    }
  }

  return parsedResponse;
};

export default getCurrentWeather;

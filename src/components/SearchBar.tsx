import { useState } from "react";
import getCurrentWeather from "../api/getCurrentWeather";
import { useQuery } from "@tanstack/react-query";

const SearchBar = () => {
  const [currentCity, setCurrentCity] = useState("");

  const { isPending, error, data } = useQuery({
    queryKey: ["currentWeather", currentCity],
    queryFn: async () => getCurrentWeather(currentCity),
    enabled: !!currentCity,
  });

  const onClickHandler = (event) => {
    event.preventDefault();

    const inputValue = normalizeAndReturnCityValue(event.target[0].value);
    setCurrentCity(inputValue);
  };

  const normalizeAndReturnCityValue = (value: string) => {
    return value
      .replace(/\s+/g, " ") // Normalize whitespace between words
      .replace(/[^a-z\s]/gi, "") // Remove non-alphabetic characters
      .trim()
      .toLowerCase(); // Convert to lowercase
  };

  return (
    <>
      <form onSubmit={onClickHandler}>
        <input placeholder="Enter city name..." />
        <button>Enter</button>
      </form>
      {/* {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>{data.location.name}</h2>
          <p>{data.current.temp_c}°C</p>
        </div>
      )} */}
    </>
  );
};

export default SearchBar;

import { useState } from "react";
import useQueryData from "../lib/hooks/useQueryData";

const SearchBar = () => {
  const [currentCity, setCurrentCity] = useState("");
  const { isFetching, error, data, queryData } = useQueryData(currentCity);

  const onClickHandler = (event) => {
    console.log(queryData);
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
      {isFetching && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>{data.location.name}</h2>
          <h2>{data.location.country}</h2>
          <h2>{data.current.condition.text}</h2>
          <h2>{data.current.temperature.celcius}</h2>
          <h2>{data.current.temperature.fahrenheit}</h2>
        </div>
      )}
      {JSON.stringify(queryData)}
    </>
  );
};

export default SearchBar;

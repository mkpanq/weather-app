import { SearchIcon } from "../icons/SearchIcon";
import { ISearchBar } from "../lib/interfaces";

export const SearchBar = ({ setCurrentCity }: ISearchBar) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const inputValue = normalizeAndReturnCityValue(event.target[0].value);
    setCurrentCity(inputValue);
  };

  return (
    <div className="border border-slate-300 rounded-lg py-2 px-3">
      <form
        onSubmit={onSubmitHandler}
        className="
        flex
        justify-between
        items-center
        gap-2
      "
      >
        <input
          placeholder="Enter city name..."
          className="
          w-full
          bg-transparent
          focus:outline-none
          focus:ring-0
          text-sm
          border-none
          font-light
          text-slate-800
        "
        />
        <button>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

const normalizeAndReturnCityValue = (value: string) => {
  return value
    .replace(/\s+/g, " ") // Normalize whitespace between words
    .replace(/[^a-z\s]/gi, "") // Remove non-alphabetic characters
    .trim() // Remove leading and trailing whitespace
    .toLowerCase(); // Convert to lowercase
};

export const SearchBar = ({
  setCurrentCity,
}: {
  setCurrentCity: (city: string) => void;
}) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const inputValue = normalizeAndReturnCityValue(event.target[0].value);
    setCurrentCity(inputValue);

    event.target[0].value = "";
  };

  return (
    <div className="shadow-lg border border-subtitle/20 rounded-xl py-2 px-3">
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
          text-subtitle
        "
        />
        <button>
          <span className="icon-[material-symbols-light--search] text-2xl align-middle" />
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

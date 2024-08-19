export const SearchBar = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input placeholder="Enter city name..." />
        <button>Enter</button>
      </form>
    </div>
  );
};

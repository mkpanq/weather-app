const SearchBar = () => {
  const onClickHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
  };

  return (
    <form onSubmit={onClickHandler}>
      <input placeholder="Enter city name..." />
      <button>Enter</button>
    </form>
  );
};

export default SearchBar;

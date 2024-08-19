import { IHeader } from "../lib/interfaces";
import LastSearches from "./LastSearches";
import { SearchBar } from "./SearchBar";

const Header = ({ setCurrentCity, cacheData }: IHeader) => {
  return (
    <div className="mx-4 my-6">
      <SearchBar setCurrentCity={setCurrentCity} />
      <LastSearches cacheData={cacheData} />
    </div>
  );
};

export default Header;

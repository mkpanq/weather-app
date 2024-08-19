import { IHeader } from "../lib/interfaces";
import { SearchBar } from "./SearchBar";

const Header = ({ setCurrentCity, cacheData }: IHeader) => {
  return (
    <div className="mx-4 my-6">
      <SearchBar setCurrentCity={setCurrentCity} />
      {JSON.stringify(cacheData)}
    </div>
  );
};

export default Header;

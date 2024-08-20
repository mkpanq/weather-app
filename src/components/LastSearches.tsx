import useQueryCachedData from "../lib/hooks/useQueryCachedData";

const LastSearches = ({
  setCurrentCity,
}: {
  setCurrentCity: (city: string) => void;
}) => {
  const cacheData = useQueryCachedData();

  const onClickHandler = (cityName: string) => {
    setCurrentCity(cityName);
  };

  return (
    <div className="min-h-10 px-2 flex">
      {cacheData.length > 0 ? (
        <ul className="flex flex-row gap-1 text-nowrap overflow-x-auto scrollbar-hide self-center md:gap-2">
          {cacheData.map((data) => (
            <li key={data.queryKey.city}>
              <button
                onClick={() => onClickHandler(data.queryKey.city)}
                className="text-[10px] px-5 py-1 rounded-full bg-accent text-whiteish/90 md:text-sm"
              >
                {data.data.location.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="max-md:hidden items-center text-xs font-light text-center text-subtitle/50 self-center mx-auto">
          Your searches will appear here. Click on any city to view the weather!
        </p>
      )}
    </div>
  );
};
export default LastSearches;

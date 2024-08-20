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
    cacheData.length > 0 && (
      <ul className="flex flex-row gap-1 text-nowrap overflow-x-auto scrollbar-hide">
        {cacheData.map((data) => (
          <li key={data.queryKey.city}>
            <button
              onClick={() => onClickHandler(data.queryKey.city)}
              className="text-[10px] px-5 py-1 rounded-full bg-accent text-whiteish/90 align-middle"
            >
              {data.data.location.name}
            </button>
          </li>
        ))}
      </ul>
    )
  );
};
export default LastSearches;

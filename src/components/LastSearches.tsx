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
      <div className="text-[10px]">
        <p className="px-1 font-extralight">Last searched cities</p>
        <ul className="flex flex-row gap-1 my-1 text-nowrap overflow-x-auto scrollbar-hide">
          {cacheData.map((data) => (
            <li key={data.queryKey.city}>
              <button onClick={() => onClickHandler(data.queryKey.city)}>
                <div className="px-5 py-1 rounded-lg bg-primary/70 text-gray-100 font-semibold">
                  {data.data.location.name}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
export default LastSearches;

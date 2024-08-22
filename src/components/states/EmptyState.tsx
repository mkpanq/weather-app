const EmptyState = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-secondAccent/50 md:text-2xl text-center">
      <p>No data available, please enter a city!</p>
      <span className="icon-[wi--cloudy] text-6xl" />
    </div>
  );
};

export default EmptyState;

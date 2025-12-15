const NoResults = () => {
  return (
    <div className="w-full md:w-xs max-h-32 overflow-y-auto absolute top-full left-[20%] z-10 mt-2.5">
      <span className="text-white font-bold text-[18px] text-center">
        No search result found!
      </span>
    </div>
  );
};

export default NoResults;

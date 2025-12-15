import LoadingIcon from "../assets/images/icon-loading.svg";

const SearchInProgress = () => {
  return (
    <div className="flex items-center bg-[#272541ff] w-full md:w-xs max-h-32 overflow-y-auto rounded-xl absolute top-full left-0 z-10 mt-2.5">
      <img src={LoadingIcon} className="p-2" />
      <span>Search in progress</span>
    </div>
  );
};

export default SearchInProgress;
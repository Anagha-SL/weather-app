import axios from "axios";
import { useEffect, useState } from "react";
import PlacesList from "./PlacesList";
import SearchIcon from "../assets/images/icon-search.svg";
import LoadingIcon from "../assets/images/icon-loading.svg";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [placesData, setPlacesData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    function getPlaces() {
      axios
        .get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}`
        )
        .then((response) => {
          // console.log(response.data.results);
          setPlacesData(response.data.results);
          //   console.log(placesData);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    getPlaces();
  }, [searchTerm]);
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="bg-[#272541ff] flex w-full md:w-xs h-10 rounded-xl mr-2.5 relative">
          <img className="p-3" src={SearchIcon} />
          <input
            className="focus:outline-none p-2"
            type="text"
            value={searchTerm}
            placeholder="Search for a place..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {isLoading && (
            <div className="flex items-center bg-[#272541ff] w-full md:w-xs max-h-32 overflow-y-auto rounded-xl absolute top-full left-0 z-10 mt-2.5">
              <img src={LoadingIcon} className="p-2" />
              <span>Search in progress</span>
            </div>
          )}
          {!isLoading && (
            <PlacesList placesData={placesData} setSearchTerm={setSearchTerm} />
          )}
        </div>
        <button className="w-full mt-2.5 bg-[#4455daff] md:w-20 md:mt-0 h-10 rounded-xl cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;

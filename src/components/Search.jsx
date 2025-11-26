import axios from "axios";
import { useEffect, useState } from "react";
import PlacesList from "./PlacesList";

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
          console.log(response.data.results);
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
    <>
      <div className="flex justify-center">
        <div className="bg-[#272541ff] flex w-xs h-10 rounded-xl mr-2.5">
          <img className="p-3" src="src\assets\images\icon-search.svg" />
          <input
            className="focus:outline-none p-2"
            type="text"
            value={searchTerm}
            placeholder="Search for a place..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-[#4455daff] w-20 h-10 rounded-xl cursor-pointer">
          Search
        </button>
      </div>
      {isLoading && (
        <div className="flex items-center bg-[#272541ff] w-xs max-h-32 overflow-y-auto rounded-xl absolute left-[370px] my-2.5">
          <img src="src\assets\images\icon-loading.svg" className="p-2" />
          <span>Search in progress</span>
        </div>
      )}
      {!isLoading && (
        <PlacesList placesData={placesData} setSearchTerm={setSearchTerm} />
      )}
    </>
  );
};

export default Search;

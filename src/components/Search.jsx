import axios from "axios";
import { useContext, useEffect, useState } from "react";
import PlacesList from "./PlacesList";
import SearchIcon from "../assets/images/icon-search.svg";
import { WeatherContext } from "../context/WeatherContext";
import NoResults from "./NoResults";
import SearchInProgress from "./SearchInProgress";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [placesData, setPlacesData] = useState([]);
  const { fetchPlaces, state, dispatch } = useContext(WeatherContext);
  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    if (!searchTerm.trim()) {
      setPlacesData([]);
      dispatch({ type: "set_error", payload: null });
      dispatch({ type: "set_noResults", payload: false });
    }
    async function getPlaces() {
      const results = await fetchPlaces(searchTerm);
      setPlacesData(results);
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
          {state.searching && <SearchInProgress />}
          {searchTerm.trim() && state.noResults && !state.searching && (
            <NoResults />
          )}
          {searchTerm.trim() && state.error && !state.searching && <Error />}
          {placesData.length > 0 && (
            <PlacesList
              placesData={placesData}
              setSearchTerm={setSearchTerm}
              setPlacesData={setPlacesData}
            />
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

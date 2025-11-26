import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const Place = ({ place, index, setSearchTerm }) => {
  const { dispatch } = useContext(WeatherContext);
  function handleClick() {
    console.log(place);
    dispatch({ type: "set_place", payload: { place } });
    setSearchTerm("");
  }
  return (
    <>
      <li
        onClick={handleClick}
        className="py-1 px-2 hover:bg-[#3d3b5eff] cursor-pointer"
      >
        {place.name}, {place.country}
      </li>
    </>
  );
};

export default Place;

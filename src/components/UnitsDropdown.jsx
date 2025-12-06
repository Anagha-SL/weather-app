import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import UnitsDropdownBtn from "./UnitsDropdownBtn";

const UnitsDropdown = ({ dropdownOpen }) => {
  const { state, dispatch } = useContext(WeatherContext);
  const units = state.units;
  // console.log(state);
  function handleClick() {
    if (
      units.temperature == "celsius" &&
      units.windspeed == "kmh" &&
      units.precipitation == "mm"
    ) {
      dispatch({ type: "change_to_i" });
    } else {
      dispatch({ type: "change_to_m" });
    }
  }
  return (
    <div
      style={dropdownOpen ? { display: "block" } : { display: "none" }}
      className="block absolute top-1/12 right-0 bg-[#272541ff] w-40 mr-2.5 text-base rounded-2xl z-10"
    >
      <button onClick={handleClick} className="m-2.5 cursor-pointer hover:bg-[#3d3b5eff]">
        {units.temperature == "celsius" &&
        units.windspeed == "kmh" &&
        units.precipitation == "mm"
          ? "Switch to Imperial"
          : "Switch to Metric"}
      </button>
      <ul>
        <li className="text-xs m-2.5">Temperature unit</li>
        <li>
          <UnitsDropdownBtn
            value="celsius"
            label="Celsius(°C)"
            type="temp_change"
            checked={units.temperature == "celsius"}
          />
        </li>
        <li>
          <UnitsDropdownBtn
            value="fahrenheit"
            label="Fahreneit(°F)"
            type="temp_change"
            checked={units.temperature == "fahrenheit"}
          />
        </li>
        <hr className="border-[#3d3b5eff]" />
        <li className="text-xs m-2.5">Wind Speed</li>
        <li>
          <UnitsDropdownBtn
            value="kmh"
            label="km/h"
            type="windspeed_change"
            checked={units.windspeed == "kmh"}
          />
        </li>
        <li>
          <UnitsDropdownBtn
            value="mph"
            label="mph"
            type="windspeed_change"
            checked={units.windspeed == "mph"}
          />
        </li>
        <hr className="border-[#3d3b5eff]" />
        <li className="text-xs m-2.5">Precipitation</li>
        <li>
          <UnitsDropdownBtn
            value="mm"
            label="mm"
            type="preci_change"
            checked={units.precipitation == "mm"}
          />
        </li>
        <li>
          <UnitsDropdownBtn
            value="inch"
            label="inches"
            type="preci_change"
            checked={units.precipitation == "inch"}
          />
        </li>
      </ul>
    </div>
  );
};

export default UnitsDropdown;

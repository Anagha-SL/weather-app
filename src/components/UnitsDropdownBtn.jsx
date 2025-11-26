import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const UnitsDropdownBtn = ({ value, label, type, checked }) => {
  const { dispatch } = useContext(WeatherContext);
  function handleClick() {
    dispatch({ type: type, payload: value });
  }
  return (
    <button
      onClick={handleClick}
      className="flex justify-between content-center items-center cursor-pointer hover:bg-[#3d3b5eff] w-11/12 m-2.5 rounded-md"
    >
      <span>{label}</span>
      {checked && (
        <span>
          <img src="\src\assets\images\icon-checkmark.svg" />
        </span>
      )}
    </button>
  );
};

export default UnitsDropdownBtn;

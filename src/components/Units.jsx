import { useState } from "react";
import UnitsDropdown from "./UnitsDropdown";

const Units = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  function handleClick() {
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <>
      <div className="flex flex-col relative inline-block">
        <button onClick={handleClick} className="bg-[#272541ff] text-base flex justify-evenly content-center items-center w-24 h-10 rounded-xl cursor-pointer">
          <span>
            <img src="src\assets\images\icon-units.svg" className="h-auto" />
          </span>
          <span>Units</span>
          <span>
            <img src="src\assets\images\icon-dropdown.svg" />
          </span>
        </button>
      </div>
      <UnitsDropdown dropdownOpen={dropdownOpen} className="mt-2" />
    </>
  );
};

export default Units;

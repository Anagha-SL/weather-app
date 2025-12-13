import { useState, useRef } from "react";
import UnitsDropdown from "./UnitsDropdown";
import UnitsIcon from "../assets/images/icon-units.svg";
import DropdownIcon from "../assets/images/icon-dropdown.svg";

const Units = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownMenu = useRef(null);
  function handleClick() {
    setDropdownOpen(!dropdownOpen);
  }
  const closeOpenDropdown = (e) => {
    if (dropdownMenu && !dropdownMenu.current?.contains(e.target)) {
      setDropdownOpen(false);
    }
  };
  document.addEventListener("mousedown", closeOpenDropdown);
  return (
    <div ref={dropdownMenu}>
      <div className="flex flex-col relative inline-block">
        <button
          onClick={handleClick}
          className="bg-[#272541ff] text-base flex justify-evenly content-center items-center w-24 h-10 rounded-xl cursor-pointer"
        >
          <span>
            <img src={UnitsIcon} className="h-auto" />
          </span>
          <span>Units</span>
          <span>
            <img src={DropdownIcon} />
          </span>
        </button>
      </div>
      <UnitsDropdown dropdownOpen={dropdownOpen} className="mt-2" />
    </div>
  );
};

export default Units;

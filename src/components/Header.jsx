import Units from "./Units";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <Units />
    </div>
  );
};

export default Header;

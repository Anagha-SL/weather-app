import Units from "./Units";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img src="src\assets\images\logo.svg" alt="Logo" />
      </div>
      <Units />
    </div>
  );
};

export default Header;

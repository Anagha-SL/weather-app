const Place = ({ place, index }) => {
  function handleClick() {}
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

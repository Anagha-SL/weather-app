import Place from "./Place";

const PlacesList = ({ placesData, setSearchTerm }) => {
  return (
    <>
      {placesData != undefined && (
        <div className="bg-[#272541ff] w-xs max-h-32 overflow-y-auto rounded-xl absolute left-[340px] my-2.5">
          <ul>
            {placesData.map((place, index) => (
              <Place place={place} key={index} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default PlacesList;

import Place from "./Place";

const PlacesList = ({ placesData, setSearchTerm, setPlacesData }) => {
  return (
    <>
      {placesData != undefined && (
        <div className="bg-[#272541ff] w-full md:w-xs max-h-32 overflow-y-auto rounded-xl absolute top-full left-0 z-10 mt-2.5">
          <ul>
            {placesData.map((place, index) => (
              <Place
                place={place}
                key={index}
                setSearchTerm={setSearchTerm}
                setPlacesData={setPlacesData}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default PlacesList;

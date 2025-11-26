const ForecastDisplayBox = ({ header, value }) => {
  return (
    <div className="w-44 h-28 bg-[#272541ff] rounded-xl">
      <p className="p-2.5">{header}</p>
      <p className="p-2.5 text-2xl">{value}</p>
    </div>
  );
};

export default ForecastDisplayBox;

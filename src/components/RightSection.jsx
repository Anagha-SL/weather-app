import HourlyForecast from "./HourlyForecast";

const RightSection = () => {
  return (
    <div className="flex flex-col mt-5 bg-[#272541ff] rounded-xl mx-10 lg:mx-5">
      <HourlyForecast />
    </div>
  );
};

export default RightSection;

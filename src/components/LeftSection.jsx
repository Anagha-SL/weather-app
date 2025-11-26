import Banner from "./Banner";
import DailyForecast from "./DailyForecast";
import MainForecastDisplay from "./MainForecastDisplay";

const LeftSection = () => {
  return (
    <div className="flex flex-col mt-5">
      <Banner />
      <MainForecastDisplay />
      <DailyForecast />
    </div>
  );
};

export default LeftSection;

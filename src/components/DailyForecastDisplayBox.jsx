import WeatherImage from "./WeatherImage";

const DailyForecastDisplayBox = ({ day, min, max, code }) => {
  //   console.log(day, min, max);
  return (
    <div className="w-[100px] h-40 bg-[#272541ff] rounded-xl flex flex-col content-center justify-evenly md:justify-between border border-[#35315c] my-1.5 lg:my-0">
      <div className="mx-auto my-0">{day}</div>
      <div className="mx-auto my-0">
        <WeatherImage code={code} imgWidth={70} imgHeight={70} />
      </div>
      <div className="flex justify-between p-1.5">
        <span>{min}°</span>
        <span>{max}°</span>
      </div>
    </div>
  );
};

export default DailyForecastDisplayBox;

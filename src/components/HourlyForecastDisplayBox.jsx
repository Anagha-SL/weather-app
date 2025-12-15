import WeatherImage from "./WeatherImage";

const HourlyForecastDisplayBox = ({ hour, temp, code }) => {
  return (
    // <p>
    //   {hour} {temp}
    // </p>
    <div className="w-4/5 lg:w-56 h-14 bg-[#323050] rounded-xl flex content-center justify-between items-center mx-5 my-1.5 p-2.5 border border-[#35315c]">
      <div className="flex items-center justify-between">
        <span>
          <WeatherImage code={code} imgWidth="40" imgHeight="40" />
        </span>
        <span>{hour}</span>
      </div>
      <span>{temp}°</span>
    </div>
  );
};
export default HourlyForecastDisplayBox;
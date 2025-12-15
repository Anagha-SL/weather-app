import { useContext } from "react";
import { WeatherDataContext } from "../context/WeatherContext";
import { getNextHoursForecast } from "../utilities/Helpers";
import HourlyForecastDisplayBox from "./HourlyForecastDisplayBox";

const HourlyForecast = () => {
  const { weatherData } = useContext(WeatherDataContext);
  // console.log(weatherData);

  if (weatherData.loading) {
    return (
      <div className="mt-5 last:mb-5">
        <h2 className="text-center md:ml-2 md:text-left font-bold">
          Hourly Forecast
        </h2>
        <div className="flex flex-col justify-evenly items-center md:items-start w-full mt-2.5">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(() => (
            <div className="w-4/5 lg:w-56 h-14 bg-[#323050] rounded-xl flex content-center justify-between items-center mx-5 my-1.5 p-2.5 border border-[#35315c]"></div>
          ))}
        </div>
      </div>
    );
  } else if (Object.keys(weatherData.weatherDataa).length > 0) {
    return (
      <div className="mt-5 last:mb-5">
        <h2 className="text-center md:ml-2 md:text-left font-bold">
          Hourly Forecast
        </h2>
        <div className="flex flex-col justify-evenly items-center md:items-start w-full mt-2.5">
          {getNextHoursForecast(
            weatherData.weatherDataa,
            weatherData.hourlyIndex
          ).map((data, index) => (
            <HourlyForecastDisplayBox
              hour={data.time}
              temp={data.temp}
              code={data.weathercode}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default HourlyForecast;

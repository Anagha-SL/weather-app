import { useContext } from "react";
import { WeatherDataContext } from "../context/WeatherContext";
import { getNextHoursForecast } from "../utilities/Helpers";
import HourlyForecastDisplayBox from "./HourlyForecastDisplayBox";

const HourlyForecast = () => {
  const { weatherData } = useContext(WeatherDataContext);
  // console.log(weatherData);

  return (
    <>
      {Object.keys(weatherData.weatherDataa).length > 0 && (
        <div className="mt-5 last:mb-5">
          <h2 className="text-center md:ml-2 md:text-left font-bold">Hourly Forecast</h2>
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
      )}
    </>
  );
};

export default HourlyForecast;

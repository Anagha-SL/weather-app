import { useContext } from "react";
import { WeatherContext, WeatherDataContext } from "../context/WeatherContext";
import { getHours, getNextHoursForecast } from "../utilities/Helpers";
import HourlyForecastDisplayBox from "./HourlyForecastDisplayBox";

const HourlyForecast = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const { weatherData, weatherDataDispatch } = useContext(WeatherDataContext);
  console.log(weatherData);

  return (
    <>
      {Object.keys(weatherData.weatherDataa).length > 0 && (
        <div className="mt-5">
          <h2 className="ml-2">Hourly Forecast</h2>
          <div className="flex flex-col justify-evenly w-full mt-2.5">
            {getNextHoursForecast(
              weatherData.weatherDataa,
              weatherData.hourlyIndex
            ).map((data, index) => (
              <HourlyForecastDisplayBox
                hour={data.time}
                temp={data.temp}
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

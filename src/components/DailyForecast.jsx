import { useContext } from "react";
import { WeatherContext, WeatherDataContext } from "../context/WeatherContext";
import DailyForecastDisplayBox from "./DailyForecastDisplayBox";
import { getDays } from "../utilities/Helpers";

const DailyForecast = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const { weatherData, weatherDataDispatch } = useContext(WeatherDataContext);
  console.log(weatherData);

  return (
    <>
      {Object.keys(weatherData.weatherDataa).length > 0 && (
        <div className="mt-5">
          <h2>Daily Forecast</h2>
          <div className="flex justify-between w-full mt-2.5">
            {getDays(weatherData.weatherDataa, "short").map((day, index) => (
              <DailyForecastDisplayBox
                day={day}
                min={weatherData.weatherDataa.daily.temperature_2m_min[index]}
                max={weatherData.weatherDataa.daily.temperature_2m_max[index]}
                code={weatherData.weatherDataa.daily.weather_code[index]}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DailyForecast;

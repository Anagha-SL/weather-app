import { useContext } from "react";
import { WeatherContext, WeatherDataContext } from "../context/WeatherContext";
import DailyForecastDisplayBox from "./DailyForecastDisplayBox";
import { getDays } from "../utilities/Helpers";

const DailyForecast = () => {
  const { weatherData } = useContext(WeatherDataContext);
  // console.log(weatherData);

  if (weatherData.loading) {
    return (
      <div className="mt-5">
        <h2 className="font-bold">Daily Forecast</h2>
        <div className="flex flex-row justify-evenly w-full mt-2.5 flex-wrap"></div>
        {[0, 1, 2, 3, 4, 5, 6].map(() => (
          <div className="w-[100px] h-40 bg-[#272541ff] rounded-xl flex flex-col content-center justify-evenly md:justify-between border border-[#35315c] my-1.5 lg:my-0"></div>
        ))}
      </div>
    );
  } else if(Object.keys(weatherData.weatherDataa).length > 0) {
    return (
      <div className="mt-5">
        <h2 className="font-bold">Daily Forecast</h2>
        <div className="flex justify-evenly w-full mt-2.5 flex-wrap">
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
    );
  }
};

export default DailyForecast;

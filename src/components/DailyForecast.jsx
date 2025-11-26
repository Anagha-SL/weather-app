import { useContext } from "react";
import { WeatherContext, WeatherDataContext } from "../context/WeatherContext";
import DailyForecastDisplayBox from "./DailyForecastDisplayBox";

const DailyForecast = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const { weatherData, weatherDataDispatch } = useContext(WeatherDataContext);
  console.log(weatherData);
  function getDays(tz) {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      weekday: "short",
    });

    const days = [];
    const today = new Date();

    for (let i = 1; i <= 7; i++) {
      // create a date shifted by i days
      const future = new Date(today);
      future.setDate(today.getDate() + i);

      // format the weekday in the target timezone
      const dayName = formatter.format(future);
      days.push(dayName);
    }
    console.log(days);
    return days;
  }
  return (
    <>
      {Object.keys(weatherData.weatherDataa).length > 0 && (
        <>
          <h2>Daily Forecast</h2>
          <div>
            {getDays(weatherData.weatherDataa.timezone).map((day, index) => (
              <DailyForecastDisplayBox
                day={day}
                min={weatherData.weatherDataa.daily.temperature_2m_min[index]}
                max={weatherData.weatherDataa.daily.temperature_2m_max[index]}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default DailyForecast;

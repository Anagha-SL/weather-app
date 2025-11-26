import ForecastDisplayBox from "./ForecastDisplayBox";
import { useContext } from "react";
import { WeatherContext, WeatherDataContext } from "../context/WeatherContext";

const MainForecastDisplay = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const { weatherData, weatherDataDispatch } = useContext(WeatherDataContext);
  console.log(weatherData);
  return (
    <>
      {Object.keys(weatherData.weatherDataa).length > 0 && (
        <div className="flex justify-between w-full mt-2.5">
          <ForecastDisplayBox
            header="Feels Like"
            value={`${
              weatherData.weatherDataa.hourly.apparent_temperature[
                weatherData.hourlyIndex
              ]
            }°`}
          />
          <ForecastDisplayBox
            header="Humidity"
            value={`${
              weatherData.weatherDataa.hourly.relative_humidity_2m[
                weatherData.hourlyIndex
              ]
            }%`}
          />
          <ForecastDisplayBox
            header="Wind"
            value={`${
              weatherData.weatherDataa.hourly.wind_speed_10m[
                weatherData.hourlyIndex
              ]
            }${state.units.windspeed}`}
          />
          <ForecastDisplayBox
            header="Precipitation"
            value={`${
              weatherData.weatherDataa.hourly.precipitation[
                weatherData.hourlyIndex
              ]
            }${state.units.precipitation}`}
          />
        </div>
      )}
    </>
  );
};

export default MainForecastDisplay;

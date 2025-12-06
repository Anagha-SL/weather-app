import { useEffect, useContext } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import {
  WeatherContext,
  WeatherDataContext,
  WeatherDataContextProvider,
} from "../context/WeatherContext";
import axios from "axios";
import { getHourlyAndDailyIndex } from "../utilities/Helpers";

const WeatherData = () => {
  const { state } = useContext(WeatherContext);
  const { weatherDataDispatch } = useContext(WeatherDataContext);

  useEffect(() => {
    function fetchWeatherData() {
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${state.place.latitude}&longitude=${state.place.longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,apparent_temperature,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&temperature_unit=${state.units.temperature}&wind_speed_unit=${state.units.windspeed}&precipitation_unit=${state.units.precipitation}&timezone=auto`
        )
        .then((response) => {
          // console.log(response);
          //   setWeatherData(response.data);
          //   console.log(placesData);
          weatherDataDispatch({ type: "set_data", payload: response.data });
          //   console.log(weatherData);
          weatherDataDispatch({
            type: "set_index",
            payload: getHourlyAndDailyIndex(response.data),
          });
        })
        .finally(() => {
          // console.log(weatherData);
        });
    }
    fetchWeatherData();
  }, [state.units, state.place]);

  return (
    <div className="flex justify-evenly">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default WeatherData;

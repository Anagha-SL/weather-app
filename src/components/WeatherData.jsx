import { useEffect, useContext, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import {
  WeatherContext,
  WeatherDataContext,
  WeatherDataContextProvider,
} from "../context/WeatherContext";
import axios from "axios";

const WeatherData = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const { weatherData, weatherDataDispatch } = useContext(WeatherDataContext);

  function getHourlyAndDailyIndex(data) {
    const tz = data.timezone || "UTC";
    const dtf = new Intl.DateTimeFormat("en-CA", {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const parts = dtf.formatToParts(new Date());
    const partMap = Object.fromEntries(parts.map((p) => [p.type, p.value]));
    // round/truncate to hour (set minutes to '00')
    const isoHour = `${partMap.year}-${partMap.month}-${partMap.day}T${partMap.hour}:00`;
    const isoDate = `${partMap.year}-${partMap.month}-${partMap.day}`;
    // console.log(isoHour, isoDate);

    const times = data.hourly.time; // array of strings
    const hidx = times.indexOf(isoHour);
    const dailys = data.daily.time;
    const didx = dailys.indexOf(isoDate);
    // console.log(times, dailys);
    // console.log(hidx, didx);

    return [hidx, didx];
  }

  useEffect(() => {
    function fetchWeatherData() {
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${state.place.latitude}&longitude=${state.place.longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,apparent_temperature,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&temperature_unit=${state.units.temperature}&wind_speed_unit=${state.units.windspeed}&precipitation_unit=${state.units.precipitation}`
        )
        .then((response) => {
          console.log(response);
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
    <div className="flex">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default WeatherData;

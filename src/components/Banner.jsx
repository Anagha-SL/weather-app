import { useContext } from "react";
import { WeatherContext, WeatherDataContext } from "../context/WeatherContext";
import {getFormattedLocalDate} from "../utilities/Helpers";

const Banner = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const { weatherData, weatherDataDispatch } = useContext(WeatherDataContext);
  console.log(weatherData);
  console.log(weatherData.weatherDataa);

  return (
    <>
      <div className="relative">
        <img src="src\assets\images\bg-today-large.svg"></img>
        {Object.keys(weatherData.weatherDataa).length > 0 && (
          <div className="absolute flex top-1/2 left-1/2 transform-[translate(-50%,-50%)] items-center justify-evenly w-full">
            <div className="">
              <span className="font-bold text-2xl">
                {state.place.name}, {state.place.country}
              </span>
              <br />
              <span className="text-sm">
                {getFormattedLocalDate(weatherData.weatherDataa.timezone)}
              </span>
            </div>

            <span className="font-bold text-7xl italic">
              {
                weatherData.weatherDataa.hourly.temperature_2m[
                  weatherData.hourlyIndex
                ]
              }
              °
            </span>
          </div>
        )}
      </div>
      <div></div>
    </>
  );
};

export default Banner;

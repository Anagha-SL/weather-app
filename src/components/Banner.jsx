import { useContext } from "react";
import { WeatherContext, WeatherDataContext } from "../context/WeatherContext";
import { getFormattedLocalDate } from "../utilities/Helpers";
import WeatherImage from "./WeatherImage";
import desktopImage from "../assets/images/bg-today-large.svg";
import mobileImage from "../assets/images/bg-today-small.svg";

const Banner = () => {
  const { state } = useContext(WeatherContext);
  const { weatherData } = useContext(WeatherDataContext);
  // console.log(weatherData);
  // console.log(weatherData.weatherDataa);

  return (
    <>
      <div className="relative">
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileImage} />
          <source media="(min-width: 769px)" srcSet={desktopImage} />
          <img src={mobileImage} style={{ width: "100%" }} />
        </picture>
        {Object.keys(weatherData.weatherDataa).length > 0 && (
          <div className="absolute flex flex-col md:flex-row top-1/2 left-1/2 transform-[translate(-50%,-50%)] items-center justify-between w-full">
            <div className="p-2.5">
              <span className="font-bold text-2xl">
                {state.place.name}, {state.place.country}
              </span>
              <br />
              <span className="text-sm">
                {getFormattedLocalDate(weatherData.weatherDataa.timezone)}
              </span>
            </div>
            <div className="p-3.5 flex items-center justify-between">
              <span>
                <WeatherImage
                  code={
                    weatherData.weatherDataa.hourly.weather_code[
                      weatherData.hourlyIndex
                    ]
                  }
                  imgWidth="100"
                  imgHeight="100"
                />
              </span>
              <span className="font-bold text-7xl italic">
                {
                  weatherData.weatherDataa.hourly.temperature_2m[
                    weatherData.hourlyIndex
                  ]
                }
                °
              </span>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </>
  );
};

export default Banner;

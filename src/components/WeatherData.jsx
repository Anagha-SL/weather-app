import { useEffect, useContext, useRef } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import {
  WeatherContext,
  WeatherDataContext,
  WeatherDataContextProvider,
} from "../context/WeatherContext";
import LoadingSkeleton from "./LoadingSkeleton";

const WeatherData = () => {
  const { state } = useContext(WeatherContext);
  const { fetchWeatherData } = useContext(WeatherDataContext);
  const prevUnitsRef = useRef(null);

  useEffect(() => {
    if (!state.place.latitude) {
      return;
    }
    if (prevUnitsRef == state.units) {
      return;
    }
    fetchWeatherData(state.place, state.units);
    prevUnitsRef.current = state.units;
  }, [state.units, state.place]);

  // if (weatherData.loading) {
  //   return <LoadingSkeleton />;
  // } else {
  return (
    <div className="flex flex-col md:flex-row justify-evenly">
      <LeftSection />
      <RightSection />
    </div>
  );
  // }
};

export default WeatherData;

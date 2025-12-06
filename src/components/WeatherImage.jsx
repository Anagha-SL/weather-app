import { getWeatherImagePath } from "../utilities/Helpers";

const WeatherImage = ({ code, imgWidth, imgHeight }) => {
  const path = getWeatherImagePath(code);
  console.log(code, path);
  return (
    <>
      <img
        src={path}
        alt="Weather icon"
        width={imgWidth}
        height={imgHeight}
      />
    </>
  );
};

export default WeatherImage;

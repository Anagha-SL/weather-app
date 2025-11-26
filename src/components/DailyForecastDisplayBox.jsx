const DailyForecastDisplayBox = ({ day, min, max }) => {
  //   console.log(day, min, max);
  return (
    <div>
      <p>{day}</p>
      <p>{min}°</p>
      <p>{max}°</p>
    </div>
  );
};

export default DailyForecastDisplayBox;

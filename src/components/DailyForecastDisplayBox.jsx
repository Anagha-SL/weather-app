const DailyForecastDisplayBox = ({ day, min, max }) => {
  //   console.log(day, min, max);
  return (
    <div className="w-24 h-32 bg-[#272541ff] rounded-xl flex flex-col content-center justify-between">
      <div className="mx-auto my-0">{day}</div>
      <div className="flex justify-between p-2.5">
        <span>{min}°</span>
        <span>{max}°</span>
      </div>
    </div>
  );
};

export default DailyForecastDisplayBox;

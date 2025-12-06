const HourlyForecastDisplayBox = ({ hour, temp }) => {
  return (
    // <p>
    //   {hour} {temp}
    // </p>
    <div className="w-56 h-14 bg-[#3d3b5eff] rounded-xl flex content-center justify-between items-center mx-5 my-1.5 p-2.5">
      <div>
        <span>{hour}</span>
      </div>
      <span>{temp}°</span>
    </div>
  );
};
export default HourlyForecastDisplayBox;

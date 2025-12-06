function getFormattedLocalDate(tz) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    weekday: "long",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  // console.log(formatter.format(new Date()));
  return formatter.format(new Date());
}

function getDays(data, type) {
  const tz = data.timezone;
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    weekday: type,
  });

  return data.daily.time.slice(0, 7).map((dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);

    // Create a neutral date (avoid browser timezone influence)
    const dateObj = new Date(Date.UTC(year, month - 1, day));

    return formatter.format(dateObj);
  });
}

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

  const times = data.hourly?.time ?? []; // array of strings
  const hidx = times.indexOf(isoHour);
  const dailys = data.daily?.time ?? [];
  const didx = dailys.indexOf(isoDate);
  // console.log(times, dailys);
  // console.log(hidx, didx);

  return [hidx, didx];
}

function getHours(data, index) {
  const tz = data.timezone;

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    hourCycle: "h12",
  });

  const hoursSlice = data.hourly.time.slice(index, index + 8);

  return hoursSlice.map((iso) => {
    // iso like "2025-08-25T15:00"
    const hour24 = parseInt(iso.slice(11, 13), 10);

    const suffix = hour24 < 12 ? "AM" : "PM";
    const hour12 = ((hour24 + 11) % 12) + 1;

    return `${hour12}${suffix}`;
  });
}

function getNextHoursForecast(data, hourIndex, count = 8) {
  const timezone = data.timezone;
  const hourlyTimes = data.hourly.time.slice(hourIndex, hourIndex + count);
  const hourlyTemps = data.hourly.temperature_2m.slice(
    hourIndex,
    hourIndex + count
  );
  const hourlyCodes =
    data.hourly.weather_code?.slice(hourIndex, hourIndex + count) || [];

  return hourlyTimes.map((iso, i) => {
    const hour24 = parseInt(iso.slice(11, 13), 10);

    const suffix = hour24 < 12 ? "AM" : "PM";
    const hour12 = ((hour24 + 11) % 12) + 1;

    return {
      time: `${hour12}${suffix}`,
      temp: hourlyTemps[i],
      weathercode: hourlyCodes[i],
    };
  });
}

function getWeatherImagePath(weathercode) {
  if (weathercode == 0 || weathercode == 1) {
    return "src\\assets\\images\\icon-sunny.webp";
  }
  if (weathercode == 2) {
    return "src\\assets\\images\\icon-partly-cloudy.webp";
  }
  if (weathercode == 3) {
    return "src\\assets\\images\\icon-overcast.webp";
  }
  if (weathercode == 45 || weathercode == 48) {
    return "src\\assets\\images\\icon-fog.webp";
  }
  if (
    weathercode == 51 ||
    weathercode == 53 ||
    weathercode == 55 ||
    weathercode == 56 ||
    weathercode == 57
  ) {
    return "src\\assets\\images\\icon-drizzle.webp";
  }
  if (
    weathercode == 61 ||
    weathercode == 63 ||
    weathercode == 65 ||
    weathercode == 66 ||
    weathercode == 67 ||
    weathercode == 80 ||
    weathercode == 81 ||
    weathercode == 82
  ) {
    return "src\\assets\\images\\icon-rain.webp";
  }
  if (
    weathercode == 71 ||
    weathercode == 73 ||
    weathercode == 75 ||
    weathercode == 77 ||
    weathercode == 85 ||
    weathercode == 86
  ) {
    return "src\\assets\\images\\icon-snow.webp";
  }
  if (weathercode == 95 || weathercode == 96 || weathercode == 99) {
    return "src\\assets\\images\\icon-storm.webp";
  }
}

export {
  getFormattedLocalDate,
  getDays,
  getHourlyAndDailyIndex,
  getHours,
  getNextHoursForecast,
  getWeatherImagePath,
};

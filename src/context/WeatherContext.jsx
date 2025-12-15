import { createContext, useReducer } from "react";
import axios from "axios";
import { getHourlyAndDailyIndex } from "../utilities/Helpers";

const WeatherContext = createContext();
function WeatherContextProvider({ children }) {
  const initialState = {
    selectedLocation: "",
    selectedDay: "",
    units: {
      temperature: "celsius",
      windspeed: "kmh",
      precipitation: "mm",
    },
    place: {
      name: "",
      latitude: "",
      longitude: "",
      country: "",
    },
    searching: false,
    error: null,
    noResults: false,
  };

  const weatherReducer = (state, action) => {
    if (action.type == "change_to_i") {
      return {
        ...state,
        units: {
          ...state.units,
          temperature: "fahrenheit",
          windspeed: "mph",
          precipitation: "inch",
        },
      };
    }
    if (action.type == "change_to_m") {
      return {
        ...state,
        units: {
          ...state.units,
          temperature: "celsius",
          windspeed: "kmh",
          precipitation: "mm",
        },
      };
    }
    if (action.type == "temp_change") {
      return {
        ...state,
        units: { ...state.units, temperature: action.payload },
      };
    }
    if (action.type == "windspeed_change") {
      return {
        ...state,
        units: { ...state.units, windspeed: action.payload },
      };
    }
    if (action.type == "preci_change") {
      return {
        ...state,
        units: { ...state.units, precipitation: action.payload },
      };
    }
    if (action.type == "set_place") {
      // console.log(action.payload);
      return {
        ...state,
        place: {
          ...state.place,
          name: action.payload.place.name,
          country: action.payload.place.country,
          latitude: action.payload.place.latitude,
          longitude: action.payload.place.longitude,
        },
      };
    }
    if (action.type == "set_searching") {
      return { ...state, searching: action.payload };
    }
    if (action.type == "set_error") {
      return { ...state, error: action.payload };
    }
    if (action.type == "set_noResults") {
      return { ...state, noResults: action.payload };
    }
  };

  const fetchPlaces = async (query) => {
    dispatch({ type: "set_searching", payload: true });
    dispatch({ type: "set_error", payload: null });
    dispatch({ type: "set_noResults", payload: false });

    if (!query.trim()) {
      dispatch({ type: "set_error", payload: null });
      dispatch({ type: "set_noResults", payload: false });
      return [];
    }

    try {
      const res = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
      );

      if (!res.data?.results?.length) {
        dispatch({ type: "set_noResults", payload: true });
        return [];
      }

      return res.data.results;
    } catch {
      dispatch({ type: "set_error", payload: "API_ERROR" });
      return [];
    } finally {
      dispatch({ type: "set_searching", payload: false });
    }
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch, fetchPlaces }}>
      {children}
    </WeatherContext.Provider>
  );
}

const WeatherDataContext = createContext();
function WeatherDataContextProvider({ children }) {
  const initialState = {
    weatherDataa: {},
    dailyIndex: -1,
    hourlyIndex: -1,
    loading: false,
    error: false,
  };

  const fetchWeatherData = async (place, units) => {
    weatherDataDispatch({ type: "set_loading", payload: true });
    weatherDataDispatch({ type: "set_error", payload: null });
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,apparent_temperature,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&temperature_unit=${units.temperature}&wind_speed_unit=${units.windspeed}&precipitation_unit=${units.precipitation}&timezone=auto`
      );
      weatherDataDispatch({ type: "set_data", payload: response.data });
      weatherDataDispatch({
        type: "set_index",
        payload: getHourlyAndDailyIndex(response.data),
      });
    } catch {
      weatherDataDispatch({ type: "set_error", payload: "API_ERROR" });
    } finally {
      weatherDataDispatch({ type: "set_loading", payload: false });
    }
  };

  const weatherDataReducer = (state, action) => {
    if (action.type == "set_data") {
      return { ...state, weatherDataa: action.payload };
    }
    if (action.type == "set_index") {
      return {
        ...state,
        hourlyIndex: action.payload[0],
        dailyIndex: action.payload[1],
      };
    }
    if (action.type == "set_loading") {
      return { ...state, loading: action.payload };
    }
    if (action.type == "set_error") {
      return { ...state, error: action.payload };
    }
    return state;
  };

  const [weatherData, weatherDataDispatch] = useReducer(
    weatherDataReducer,
    initialState
  );

  return (
    <WeatherDataContext.Provider value={{ weatherData, weatherDataDispatch, fetchWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
}

export {
  WeatherContext,
  WeatherContextProvider,
  WeatherDataContext,
  WeatherDataContextProvider,
};

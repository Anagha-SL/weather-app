import { createContext, useReducer } from "react";

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
  };
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
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
  };
  const weatherDataReducer = (state, action) => {
    if (action.type == "set_data") {
      // console.log("here");
      // console.log(action.payload);
      // console.log({ ...state, weatherDataa: action.payload });
      return { ...state, weatherDataa: action.payload };
    }
    if (action.type == "set_index") {
      // console.log(action.payload);
      // console.log({
      //   ...state,
      //   hourlyIndex: action.payload[0],
      //   dailyIndex: action.payload[1],
      // });

      return {
        ...state,
        hourlyIndex: action.payload[0],
        dailyIndex: action.payload[1],
      };
    }
    return state;
  };
  const [weatherData, weatherDataDispatch] = useReducer(
    weatherDataReducer,
    initialState
  );
  return (
    <WeatherDataContext.Provider value={{ weatherData, weatherDataDispatch }}>
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

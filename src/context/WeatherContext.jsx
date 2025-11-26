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
  };
  const weatherReducer = (state, action) => {
    if (action.type == "change_to_i") {
      return {
        ...state,
        units: {
          ...state.units,
          temperature: "fahrenheit",
          windspeed: "mph",
          precipitation: "in",
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
  };
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherContextProvider };

import Header from "./components/Header";
import {
  WeatherContextProvider,
  WeatherDataContextProvider,
} from "./context/WeatherContext";
import "./App.css";
import StaticText from "./components/StaticText";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";

function App() {
  return (
    <>
      <WeatherContextProvider>
        <Header />
        <StaticText />
        <Search />
        <WeatherDataContextProvider>
          <WeatherData />
        </WeatherDataContextProvider>
      </WeatherContextProvider>
    </>
  );
}

export default App;

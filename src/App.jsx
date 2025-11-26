import Header from "./components/Header";
import { WeatherContextProvider } from "./context/WeatherContext";
import "./App.css";
import StaticText from "./components/StaticText";
import Search from "./components/Search";

function App() {
  return (
    <>
      <WeatherContextProvider>
        <Header />
        <StaticText />
        <Search />
      </WeatherContextProvider>
    </>
  );
}

export default App;

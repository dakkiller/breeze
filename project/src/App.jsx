import { useState } from "react";
import SearchBar from "./componets/SearchBar";
import WeatherCard from "./componets/WeatherCard";
import Loader from "./componets/Loader";
import useWeather from "./hooks/useWeather";

export default function App() {
  const [city, setCity] = useState("");
  const { loading, weather, error, getWeather } = useWeather();
  const handleSearch = (cityName) => {
    setCity(cityName);
    getWeather(cityName);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {weather && !loading && <WeatherCard weather={weather} cityName={city} />}
    </div>
  );
  m;
}

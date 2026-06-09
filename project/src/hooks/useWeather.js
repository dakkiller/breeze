import { useState } from "react";

export default function useWeather() {
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = (city) => {
    setLoading(true);
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
      .then((res) => res.json())
      .then((data) => {
        const lat = data.results[0].latitude;
        const lon = data.results[0].longitude;
        return fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
        );
      })
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      });
  };
  return { loading, weather, getWeather };
}

export default function WeatherCard({ weather, cityName }) {
  const current = weather.current_weather;
  return (
    <div>
      <h1>{current.temprature}</h1>
      <h2>{cityName}</h2>
      <p>{current.windspeed}</p>
      <p>{current.weathercode}</p>
    </div>
  );
}

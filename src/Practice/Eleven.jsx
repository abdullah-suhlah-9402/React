import { useEffect, useState } from "preact/hooks";
import React from "react";

function Eleven() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={0ce49827ca6d9c43c6ed6d21986c0c24}`
        )
          .then((res) => res.json())
          .then((data) => setWeather(data));
      });
    }
  });
  return (
    <div>
      {weather ? (
        <div>
          <h1> current weather </h1>
          <h2>Temperature : {weather.main.temp}</h2>
          <h5>Conditions{weather.weather[0].description}</h5>
        </div>
      ) : (
        <div>
          <h1> Loading ................... </h1>
        </div>
      )}
    </div>
  );
}

export default Eleven;

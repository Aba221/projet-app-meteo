import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const { name, main, weather, wind } = weatherData;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <div>Température: {main.temp}°C</div>
      <div>Conditions: {weather[0].description}</div>
      <div>Vitesse du vent: {wind.speed} m/s</div>
    </div>
  );
};

export default WeatherDisplay;

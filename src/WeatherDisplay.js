import React from 'react';

// Définition de la fonction getWeatherBackgroundImage 
function getWeatherBackgroundImage(weatherCondition) {
  switch (weatherCondition) {
    case 'Clear':
      return 'sunny.jpg'; 
    case 'Clouds':
      return 'cloudy.jpg'; 
    case 'Rain':
      return 'rainy.jpg'; 
    
    default:
      return 'default.jpg'; // Image par défaut
  }
}

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const { name, main, weather, wind } = weatherData;

  const weatherCondition = weather[0].main;
  const backgroundUrl = getWeatherBackgroundImage(weatherCondition);

  const weatherDisplayStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
  };

  return (
    <div className="weather-display" style={weatherDisplayStyle}>
      <h2>{name}</h2>
      <div>Température: {main.temp}°C</div>
      <div>Conditions: {weather[0].description}</div>
      <div>Vitesse du vent: {wind.speed} m/s</div>
    </div>
  );
};

export default WeatherDisplay;

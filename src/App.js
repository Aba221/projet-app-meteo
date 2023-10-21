import React, { useState } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import WeatherDisplay from './WeatherDisplay';
import axios from 'axios';

const API_KEY = '5814a8ec2c81ee2c7183eb2e3a0b84c6'; 

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const searchWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('Emplacement introuvable. Veuillez réessayer.');
      setWeatherData(null);
    }
  };

  const resetWeatherData = () => {
    setWeatherData(null);
    setError(null);
  };

  return (
    <div className="App">
      <h1>Application Météo</h1>
      <SearchForm onSearch={searchWeather} onReset={resetWeatherData} />
      {error && <div className="error">{error}</div>}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;

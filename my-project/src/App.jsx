import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import './App.css';
import WeatherCard from './components/Card';
const apiId = 'b707ec40f0136410da60d1d421b6e0f9'

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiId}
        `
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <br/>
      <h1 className="text-5xl font-bold text-white">
      Weather
    </h1>
    <br/>
      <form onSubmit={handleSubmit}>
        <input
          className='px-2 py-2 mx-2 border'
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      <div className="flex my-3 items-center min-h-screen sm:flex-col">
  {weather && <WeatherCard weather={weather} />}
</div>
    </div>
  );
}

export default App;

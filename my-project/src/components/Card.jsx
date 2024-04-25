import React from 'react';

const WeatherCard = ({ weather }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 text-black rounded-lg shadow dark:border-gray-700 transition-105 duration-300 transform hover:scale-105 cursor-pointer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{weather.name} ({weather.sys.country})</h5>
            <div className="weather-details">
                <p className=' flex items-center text-xl'>
                    <img src="temp.svg" alt=" Icon" width={50} className="mr-2" />
                    Temperature: {weather.main.temp}°C
                </p>
                <br />
                <div className="flex flex-col sm:flex-row">
                    <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
                        <img src="temp.svg" alt="Min Temp Icon" width={50} className="mr-2" />
                        <span className="text-xl">Min: {weather.main.temp_min}°C</span>
                    </div>

                    <div className="flex items-center">
                        <img src="temp.svg" alt="Max Temp Icon" width={50} className="mr-2" />
                        <span className="text-xl">Max:{weather.main.temp_max}°C</span>
                    </div>
                </div>

                <br />
                <p className='flex items-center text-xl'>
                    <img src="humidity.svg" alt="Humidity Icon" width={50} className="mr-2" />
                    Humidity: {weather.main.humidity}%
                </p>
                <p className='flex items-center text-xl'>
                    <img src="wind.svg" alt="Wind Speed Icon" width={50} className="mr-2 filter brightness-0" />
                    Wind Speed: {weather.wind.speed} m/s
                </p>
            </div>
        </div>


    );
};

export default WeatherCard;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const CITY = "Lucena City"; // Change to any city
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

    useEffect(() => {
        axios.get(URL)
            .then(response => setWeather(response.data))
            .catch(error => console.error("Error fetching weather:", error));
    }, []);

    return (
        <div>
            <h2>Weather in {CITY}</h2>
            {weather ? (
                <div>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Weather;
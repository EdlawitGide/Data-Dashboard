import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "4377b4cae90448b6ab54fbde5210929a"; // Replace 'YOUR_API_KEY' with your actual API key from Weatherbit

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherbit.io/v2.0/current?key=$'{apiKey}`"
        );
        setWeatherData(response.data);
      } catch (error) {
        setError("Error fetching weather data");
      }
    };

    fetchWeatherData();
  }, [apiKey]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dashboard">
      <h2>Weather Information</h2>
      {weatherData ? (
        <div>
          <p>City: {weatherData.data[0].city_name}</p>
          <p>Temperature: {weatherData.data[0].temp} °C</p>
          <p>Weather Description: {weatherData.data[0].weather.description}</p>
          {/* Add more weather data fields as needed */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Dashboard;

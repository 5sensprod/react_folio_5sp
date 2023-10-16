import React, { useState } from 'react'
import { fetchWeatherData } from '../../api/openWeatherMap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { WeatherSearchBar } from './WeatherSearchBar'

function Weather() {
  const [query, setQuery] = useState('Paris')
  const [weather, setWeather] = useState(null)

  const fetchWeather = async (e) => {
    e.preventDefault()

    try {
      const data = await fetchWeatherData(query)
      setWeather(data)
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo:', error)
    }
  }

  return (
    <div>
      <WeatherSearchBar
        search={query}
        onSearchChange={(value) => setQuery(value)}
        onSubmit={fetchWeather}
      />
      {weather && (
        <div>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Température: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  )
}

export default Weather

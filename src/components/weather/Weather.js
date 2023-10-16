import React, { useState } from 'react'
import axios from 'axios'
// import { Input } from '../forms/Inputs'
// import { SubmitButton } from '../forms/SubmitButton'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { SearchBar } from '../forms/SearchBar'

function Weather() {
  const [query, setQuery] = useState('Paris') // Par défaut, on met Paris
  const [weather, setWeather] = useState(null)

  const apiKey = '011227f0852ee382a5cc27ce6d920a9b'

  const fetchWeather = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`,
      )
      setWeather(response.data)
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo:', error)
    }
  }

  return (
    <div>
      <SearchBar
        search={query}
        onSearchChange={(value) => setQuery(value)}
        onSubmit={fetchWeather}
        submitLabel="Rechercher"
        iconName="bi-search"
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

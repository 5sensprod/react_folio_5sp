import axiosInstance from '../axiosConfig'

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = '011227f0852ee382a5cc27ce6d920a9b'

export const fetchWeatherData = async (query) => {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}?q=${query}&appid=${API_KEY}&units=metric`,
    )
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données météo:', error)
    throw error
  }
}

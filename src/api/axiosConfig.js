import axios from 'axios'

const axiosInstance = axios.create({
  // Définir des en-têtes globaux ou d'autres configurations ici
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance

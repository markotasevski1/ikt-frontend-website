import axios from 'axios'
export default axios.create({
  baseURL: 'https://lerndeutsch-backend.azurewebsites.net/api',
  headers: {
    'Content-type': 'application/json',
  },
})

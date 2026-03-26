import axios from 'axios'

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })

  return {
    provide: {
      axios: instance
    }
  }
})
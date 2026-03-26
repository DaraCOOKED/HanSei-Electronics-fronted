import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as any,
  }),

  actions: {
    async login(email: string, password: string) {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password
      })

      // Save token and user
      this.token = response.data.token
      this.user  = response.data.user

      // Save token to cookie
      const cookie = useCookie('token')
      cookie.value = response.data.token

      // Go to dashboard
      navigateTo('/dashboard')
    },

    logout() {
      this.token = null
      this.user  = null
      const cookie = useCookie('token')
      cookie.value = null
      navigateTo('/login')
    }
  }
})
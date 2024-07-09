import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null
  }),
  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },
    removeToken() {
      this.token = null
      localStorage.removeItem('token')
    },
    setUser(user: any) {
      this.user = user
    },
    async logout() {
      await axios.get('user/logout')
      this.removeToken()
      this.setUser(null)
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  }
})

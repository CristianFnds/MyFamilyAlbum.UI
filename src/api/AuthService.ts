import { jwtDecode } from 'jwt-decode'
import { LoginData, TokenPayload } from '../types/Auth'
import api from './Api'

const authService = {
  login: async (loginData: LoginData) => {
    try {
      const response = await api.post('/auth/fakelogin', loginData)

      const data = authService.decodeToken(response.data)

      if (data != null) {
        localStorage.setItem('token', response.data)
        localStorage.setItem('id', data.userId.toString())
        localStorage.setItem('name', data.name)
        localStorage.setItem('email', data.email)
      }
    } catch (error) {
      throw new Error('Invalid credentials:' + error)
    }
  },

  getToken: () => {
    return localStorage.getItem('token')
  },

  getUser: () => {
    return {
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      id: localStorage.getItem('id'),
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
  },

  isAuthenticated: () => {
    const token = authService.getToken()

    if (!token) return false
    //Logic to validate expiration date
    return true
  },

  decodeToken: (token: string): TokenPayload | null => {
    try {
      const decoded = jwtDecode<TokenPayload>(token)
      return decoded
    } catch (error) {
      console.error('Error decoding the token', error)
      return null
    }
  },
}

export default authService

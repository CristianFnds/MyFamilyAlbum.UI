import { jwtDecode } from 'jwt-decode'
import api from './Api'

//TODO mover interface
interface TokenPayload {
  email: string
  name: string
  userId: number
  exp: number
  sub: string
}

interface LoginData {
  email: string
  password: string
}

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
      throw new Error('Credenciais inválidas:' + error)
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
    //Logica para validar expiration date //todo
    return true
  },

  decodeToken: (token: string): TokenPayload | null => {
    try {
      const decoded = jwtDecode<TokenPayload>(token)
      return decoded
    } catch (error) {
      console.error('Erro ao decodificar o token', error)
      return null
    }
  },
}

export default authService

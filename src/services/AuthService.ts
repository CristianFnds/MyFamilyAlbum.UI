import axios from 'axios'

//TODO create enviroment variable

interface LoginData {
  email: string
  password: string
}

const API_URL = 'http://localhost:3000'

const authService = {
  login: async (loginData: LoginData) => {
    try {
      const response = await axios.post(API_URL + '/auth/fakelogin', loginData)
      localStorage.setItem('token', response.data)
      localStorage.removeItem('token')
      console.log(authService.getToken())
    } catch (error) {
      throw new Error('Credenciais inválidas:' + error)
    }
  },

  getToken: () => {
    return localStorage.getItem('token')
  },

  logout: () => {
    localStorage.removeItem('token')
  },

  //verificar quais metodos precisam mesmo
  isAuthenticated: () => {
    return authService.getToken() !== null
  },
}

export default authService

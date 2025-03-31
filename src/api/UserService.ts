import api from './Api'

const userService = {
  getUsers: async () => {
    const response = await api.get('/user')
    return response.data
  },

  getUser: async (userId: string) => {
    const response = await api.get(`/user/${userId}`)
    return response.data
  },
  getAlbumByUserId: async (userId: string) => {
    const response = await api.get(`/user/${userId}/albums`)
    return response.data
  },
}

export default userService

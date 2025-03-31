import api from './Api'

const UserService = {
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
    //if (!response.ok) throw new Error('Erro ao buscar fotos')
    return response.data
  },
}

export default UserService

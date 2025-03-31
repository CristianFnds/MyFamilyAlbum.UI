import api from './Api'
import authService from './AuthService'

const PhotoService = {
  deletePhoto: async (photoId: number) => {
    try {
      const response = await api.delete(`photos/${photoId}`, {
        headers: {
          Authorization: `Bearer ${authService.getToken()}`,
        },
      })

      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Erro ao excluir foto: ${response.statusText}`)
      }
    } catch (error: any) {
      throw new Error('Não foi possível excluir a foto. Tente novamente.')
    }
  },
}

export default PhotoService

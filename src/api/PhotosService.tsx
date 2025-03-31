import api from './Api'
import authService from './AuthService'

const photoService = {
  deletePhoto: async (photoId: number) => {
    try {
      if (photoId == 0) return //photo created in time execution time

      const response = await api.delete(`photos/${photoId}`, {
        headers: {
          Authorization: `Bearer ${authService.getToken()}`,
        },
      })

      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Error deleting photo: ${response.statusText}`)
      }
    } catch (error: any) {
      throw new Error(
        'It was not possible to delete the photo. Please try again.'
      )
    }
  },
}

export default photoService

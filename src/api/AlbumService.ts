import api from './Api'
import authService from './AuthService'

const albumService = {
  getPhotosByAlbumId: async (albumId: string) => {
    const response = await api.get(`album/${albumId}/photos`)
    return response.data
  },

  deleteAlbum: async (albumId: string) => {
    try {
      const response = await api.delete(`album/${albumId}`, {
        headers: {
          Authorization: `Bearer ${authService.getToken()}`,
        },
      })

      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Error deleting album: ${response.statusText}`)
      }
    } catch (error: any) {
      throw new Error(
        'It was not possible to delete the album. Please try again.'
      )
    }
  },
}

export default albumService

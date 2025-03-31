import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import albumService from '../../../api/AlbumService'
import photoService from '../../../api/PhotosService'
import { Photo } from '../../../types/Photo'
import PhotoCard from './PhotoCard'

interface Props {
  albumId: string
  userId: string
}

const PhotoList = ({ albumId, userId }: Props) => {
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setPhotos(await albumService.getPhotosByAlbumId(albumId))
      } catch (error) {
        console.error('Erro ao buscar fotos:', error)
      }
    }
    fetchPhotos()
  }, [albumId])

  const handleDelete = async (photoId: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta foto?')) {
      await photoService.deletePhoto(photoId)
      setPhotos((prev) => prev.filter((p) => p.id !== photoId))
    }
  }

  const handleEdit = (albumId: number) => {
    //navigate(`/users/${userId}/albums/${albumId}/edit`)
  }

  return (
    <Grid container spacing={3}>
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          userId={userId}
          onDelete={handleDelete}
          onEdit={() => handleEdit(photo.id)}
        />
      ))}
    </Grid>
  )
}

export default PhotoList

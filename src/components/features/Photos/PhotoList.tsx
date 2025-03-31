import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import albumService from '../../../api/AlbumService'
import AuthService from '../../../api/AuthService'
import { Photo } from '../../../types/Photo'
import PhotoCard from './PhotoCard'
import PhotoDialog from './PhotoDialog'

interface Props {
  albumId: string
  userId: string
}

const PhotoList = ({ albumId, userId }: Props) => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [authUserId, setAuthUserId] = useState<string | null>(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const authUser = await AuthService.getUser()
        setAuthUserId(authUser.id)
        setPhotos(await albumService.getPhotosByAlbumId(albumId))
      } catch (error) {
        console.error('Erro ao buscar fotos:', error)
      }
    }
    fetchPhotos()
  }, [albumId])

  const handleDelete = async (photoId: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta foto?')) {
      setPhotos((prev) => prev.filter((p) => p.id !== photoId))
    }
  }

  const handleEdit = (albumId: number) => {
    //navigate(`/users/${userId}/albums/${albumId}/edit`)
  }

  const handleAddPhoto = (newPhoto: Photo) => {
    setPhotos((prev) => [newPhoto, ...prev])
  }

  return (
    <>
      {authUserId == userId && (
        <PhotoDialog albumId={albumId} onAddPhoto={handleAddPhoto} />
      )}

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
    </>
  )
}

export default PhotoList

import { AddPhotoAlternate } from '@mui/icons-material'
import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AlbumService from '../services/AlbumService'
import PhotoService from '../services/PhotosService'
import UserService from '../services/UserService'
import Actions from './Actions'
import Layout from './Layout/Layout'

interface Photo {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}
interface User {
  id: string
  name: string
  email: string
}

const AlbumPhotos = () => {
  const { userId, albumId } = useParams<{ userId: string; albumId: string }>()
  const navigate = useNavigate()
  const [photos, setPhotos] = useState<Photo[]>([])
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        if (albumId && userId) {
          setPhotos(await AlbumService.getPhotosByAlbumId(albumId))
          setUser(await UserService.getUser(userId))
        }
      } catch (error) {
        console.error('Erro ao buscar fotos do álbum:', error)
      }
    }

    fetchPhotos()
  }, [albumId])

  const handleDelete = async (photoId: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta foto?')) {
      await PhotoService.deletePhoto(photoId)
      setPhotos((prevPhotos) =>
        prevPhotos.filter((photo) => photo.id !== photoId)
      )
    }
  }

  const handleEdit = (albumId: number) => {
    //navigate(`/users/${userId}/albums/${albumId}/edit`)
  }

  return (
    <Layout>
      <Container sx={{ mt: 10 }}>
        <Typography variant="h4" gutterBottom>
          Fotos do Álbum
        </Typography>
        <Typography variant="h6" gutterBottom>
          {user?.name}
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddPhotoAlternate />}
          sx={{ mb: 2, mr: 2 }}
          onClick={() =>
            navigate(`/users/${userId}/albums/${albumId}/add-photo`)
          }
        >
          Adicionar Foto
        </Button>

        <Grid container spacing={3}>
          {photos.map((photo) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={photo.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={photo.url}
                  alt={photo.title}
                />

                <Actions
                  userId={userId!}
                  onEdit={() => handleEdit(photo.id)}
                  onDelete={() => handleDelete(photo.id)}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default AlbumPhotos

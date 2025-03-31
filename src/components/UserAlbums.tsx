import CollectionsIcon from '@mui/icons-material/Collections'
import { Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AlbumService from '../services/AlbumService'
import UserService from '../services/UserService'
import Actions from './Actions'
import Layout from './Layout/Layout'

interface Album {
  id: number
  userId: string
  title: string
}

interface User {
  id: string
  name: string
  email: string
}

const UserAlbums = () => {
  const { userId } = useParams<{ userId: string }>()
  const [albums, setAlbums] = useState<Album[]>([])
  const [user, setUser] = useState<User>()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        if (userId) {
          const userAlbums = await UserService.getAlbumByUserId(userId)
          const user = await UserService.getUser(userId)
          setAlbums(userAlbums)
          setUser(user)
        }
      } catch (error) {
        console.error('Erro ao buscar álbuns do usuário:', error)
      }
    }

    fetchAlbums()
  }, [userId])

  const handleDelete = async (albumId: number) => {
    try {
      await AlbumService.deleteAlbum(albumId.toString())

      setAlbums((prevAlbums) =>
        prevAlbums.filter((album) => album.id !== albumId)
      )
      alert('Álbum excluído com sucesso!')
    } catch (error) {
      console.error('Erro ao excluir álbum:', error)
      alert('Erro ao excluir álbum.')
    }
  }

  const handleAlbumClick = (albumId: number) => {
    navigate(`/users/${userId}/albums/${albumId}/photos`)
  }

  const handleEdit = (albumId: number) => {
    //navigate(`/users/${userId}/albums/${albumId}/edit`)
  }

  return (
    <Layout>
      <Container sx={{ mt: 10 }}>
        <Typography variant="h4" gutterBottom>
          {user?.name}
        </Typography>

        <Typography variant="h6" gutterBottom>
          {user?.email}
        </Typography>

        <Grid container spacing={3}>
          {albums.map((album) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={album.id}>
              <Card>
                <CardContent
                  sx={{ textAlign: 'center' }}
                  onClick={() => handleAlbumClick(album.id)}
                >
                  <CollectionsIcon
                    sx={{ fontSize: 50, color: 'primary.main' }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    {album.title}
                  </Typography>
                </CardContent>
                <Actions
                  userId={userId!}
                  onEdit={() => handleEdit(album.id)}
                  onDelete={() => handleDelete(album.id)}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default UserAlbums

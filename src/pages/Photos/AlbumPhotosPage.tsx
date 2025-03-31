import { AddPhotoAlternate } from '@mui/icons-material'
import { Button, Container } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import UserDetails from '../../components/common/UserDetail'
import PhotoList from '../../components/features/Photos/PhotoList'

const AlbumPhotos = () => {
  const { userId, albumId } = useParams<{ userId: string; albumId: string }>()
  const navigate = useNavigate()

  return (
    <Layout>
      <Container sx={{ mt: 10 }}>
        <UserDetails userId={userId!} />

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

        <PhotoList albumId={albumId!} userId={userId!} />
      </Container>
    </Layout>
  )
}

export default AlbumPhotos

import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import UserDetails from '../../components/common/UserDetail'
import PhotoList from '../../components/features/Photos/PhotoList'

const AlbumPhotos = () => {
  const { userId, albumId } = useParams<{ userId: string; albumId: string }>()

  return (
    <Layout>
      <Container sx={{ mt: 10 }}>
        <UserDetails userId={userId!} />
        <PhotoList albumId={albumId!} userId={userId!} />
      </Container>
    </Layout>
  )
}

export default AlbumPhotos

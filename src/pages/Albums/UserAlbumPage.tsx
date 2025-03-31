import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import UserDetails from '../../components/common/UserDetail'
import AlbumList from '../../components/features/Albums/AlbumList'

const UserAlbums = () => {
  const { userId } = useParams<{ userId: string }>()

  return (
    <Layout>
      <Container sx={{ mt: 10 }}>
        <UserDetails userId={userId!} />
        <AlbumList />
      </Container>
    </Layout>
  )
}

export default UserAlbums

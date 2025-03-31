import { Box, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import albumService from '../../../api/AlbumService'
import AuthService from '../../../api/AuthService'
import userService from '../../../api/UserService'
import { Album } from '../../../types/Album'
import AlbumCard from './AlbumCard'
import AlbumDialog from './AlbumDialog'

const AlbumList = () => {
  const { userId } = useParams<{ userId: string }>()
  const [albums, setAlbums] = useState<Album[]>([])
  const [authUserId, setAuthUserId] = useState<string | null>(null)

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const authUser = await AuthService.getUser()
        setAuthUserId(authUser.id)
        if (userId) {
          const userAlbums = await userService.getAlbumByUserId(userId)
          setAlbums(userAlbums)
        }
      } catch (error) {
        console.error('Error fetching albums:', error)
      }
    }

    fetchAlbums()
  }, [userId])

  const handleDelete = async (albumId: number) => {
    try {
      await albumService.deleteAlbum(albumId.toString())
      setAlbums((prevAlbums) =>
        prevAlbums.filter((album) => album.id !== albumId)
      )
      alert('Album successfully deleted!')
    } catch (error) {
      console.error('Error deleting album:', error)
      alert('Error deleting album:')
    }
  }

  const handleAddAlbum = (newAlbum: Album) => {
    setAlbums((prev) => [newAlbum, ...prev])
  }

  return (
    <>
      {authUserId == userId && (
        <Box mb={2}>
          <AlbumDialog userId={userId!} onAddAlbum={handleAddAlbum} />
        </Box>
      )}

      <Grid container spacing={3}>
        {albums.map((album) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={album.id}>
            <AlbumCard
              albumId={album.id}
              userId={userId!}
              title={album.title}
              onDelete={handleDelete}
              onEdit={() => console.log(`Edit album ${album.id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default AlbumList

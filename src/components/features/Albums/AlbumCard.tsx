import CollectionsIcon from '@mui/icons-material/Collections'
import { Card, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Actions from '../../common/Actions'

interface AlbumCardProps {
  albumId: number
  userId: string
  title: string
  onDelete: (albumId: number) => void
  onEdit: (albumId: number) => void
}

const AlbumCard = ({
  albumId,
  userId,
  title,
  onDelete,
  onEdit,
}: AlbumCardProps) => {
  const navigate = useNavigate()

  return (
    <Card>
      <CardContent
        sx={{ textAlign: 'center', cursor: 'pointer' }}
        onClick={() => navigate(`/users/${userId}/albums/${albumId}/photos`)}
      >
        <CollectionsIcon sx={{ fontSize: 50, color: 'primary.main' }} />
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
      </CardContent>
      <Actions
        userId={userId!}
        onEdit={() => onEdit(albumId)}
        onDelete={() => onDelete(albumId)}
      />
    </Card>
  )
}

export default AlbumCard

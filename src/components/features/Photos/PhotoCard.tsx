import { Card, CardMedia, Grid } from '@mui/material'
import { Photo } from '../../../types/Photo'
import Actions from '../../common/Actions'

interface Props {
  photo: Photo
  userId: string
  onDelete: (photoId: number) => void
  onEdit: () => void
}

const PhotoCard = ({ photo, userId, onDelete, onEdit }: Props) => {
  //TODO remover
  photo.url =
    'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={photo.id}>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={photo.url}
          alt={photo.title}
        />

        <Actions
          userId={userId}
          onEdit={onEdit}
          onDelete={() => onDelete(photo.id)}
        />
      </Card>
    </Grid>
  )
}

export default PhotoCard

import AddPhotoAlternate from '@mui/icons-material/AddPhotoAlternate'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useState } from 'react'
import { Photo } from '../../../types/Photo'

interface Props {
  albumId: string
  onAddPhoto: (newPhoto: Photo) => void
}

const PhotoDialog = ({ albumId, onAddPhoto }: Props) => {
  const [newPhoto, setNewPhoto] = useState({ title: '', url: '' })
  const [openDialog, setOpenDialog] = useState(false)

  const handleAddPhoto = async () => {
    try {
      const newPhotoData: Photo = {
        id: 0,
        albumId: Number(albumId),
        title: newPhoto.title,
        url: newPhoto.url,
        thumbnailUrl: newPhoto.url,
      }

      onAddPhoto(newPhotoData)
      setOpenDialog(false)
      setNewPhoto({ title: '', url: '' })
    } catch (error) {
      console.error('Error adding photo:', error)
    }
  }

  return (
    <>
      <Button
        startIcon={<AddPhotoAlternate />}
        variant="contained"
        color="primary"
        onClick={() => setOpenDialog(true)}
      >
        Add photo
      </Button>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add photo</DialogTitle>
        <DialogContent>
          <TextField
            label="Título"
            fullWidth
            margin="normal"
            value={newPhoto.title}
            onChange={(e) =>
              setNewPhoto({ ...newPhoto, title: e.target.value })
            }
          />
          <TextField
            label="URL da Imagem"
            fullWidth
            margin="normal"
            value={newPhoto.url}
            onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleAddPhoto} color="primary">
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default PhotoDialog

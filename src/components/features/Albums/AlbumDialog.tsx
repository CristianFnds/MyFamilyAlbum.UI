import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import { useState } from 'react'
import { Album } from '../../../types/Album'

interface Props {
  userId: string
  onAddAlbum: (newAlbum: Album) => void
}

const AlbumDialog = ({ userId, onAddAlbum }: Props) => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = async () => {
    try {
      //Fake create
      // const newAlbum = await albumService.createAlbum({ userId, title })
      const newAlbum: Album = {
        id: 0,
        userId,
        title,
      }

      onAddAlbum(newAlbum)
      setTitle('')
      handleClose()
    } catch (error) {
      alert('Error creating album')
    }
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create Álbum
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Álbum</DialogTitle>
        <DialogContent>
          <TextField
            label="title album"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AlbumDialog

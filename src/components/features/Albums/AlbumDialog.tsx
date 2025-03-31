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
    if (!title.trim()) return alert('O título do álbum é obrigatório.')

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
      console.error('Erro ao criar álbum:', error)
      alert('Erro ao criar álbum.')
    }
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Criar Álbum
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Criar Novo Álbum</DialogTitle>
        <DialogContent>
          <TextField
            label="Título do Álbum"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Criar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AlbumDialog

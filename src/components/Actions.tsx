import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import AuthService from '../services/AuthService'

interface AlbumActionsProps {
  userId: string
  onEdit: () => void
  onDelete: () => void
}

const Actions: React.FC<AlbumActionsProps> = ({ userId, onEdit, onDelete }) => {
  const [authUserId, setAuthUserId] = useState<string | null>(null)

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const authUser = await AuthService.getUser()
        setAuthUserId(authUser.id)
      } catch (error) {
        console.error('Erro ao obter o usuário autenticado:', error)
      }
    }

    fetchAuthUser()
  }, [])

  if (authUserId !== userId) return null

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px',
      }}
    >
      <IconButton color="primary" onClick={onEdit}>
        <EditIcon />
      </IconButton>

      <IconButton color="error" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

export default Actions

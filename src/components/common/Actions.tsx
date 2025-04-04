import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import AuthService from '../../api/AuthService'

interface ActionsProps {
  userId: string
  onEdit: () => void
  onDelete: () => void
}

const Actions: React.FC<ActionsProps> = ({ userId, onEdit, onDelete }) => {
  const [authUserId, setAuthUserId] = useState<string | null>(null)

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const authUser = await AuthService.getUser()
        setAuthUserId(authUser.id)
      } catch (error) {
        console.error('Error retrieving the authenticated user:', error)
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

import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import userService from '../../api/UserService'
import { User } from '../../types/User'

interface UserDetailsProps {
  userId: string
}

const UserDetails = ({ userId }: UserDetailsProps) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setUser(await userService.getUser(userId))
      } catch (error) {
        console.error('Erro ao buscar usuário:', error)
      }
    }
    fetchUser()
  }, [userId])

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {user?.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {user?.email}
      </Typography>
    </>
  )
}

export default UserDetails

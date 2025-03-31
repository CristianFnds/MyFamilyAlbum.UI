import { Container, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import userService from '../../../api/UserService'
import { User } from '../../../types/User'
import UserCard from './UserCard'

const UserList = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await userService.getUsers()
        setUsers(usersData)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        User list
      </Typography>

      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default UserList

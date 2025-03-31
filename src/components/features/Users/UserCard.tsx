import { Card, CardActionArea, CardContent } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { User } from '../../../types/User'
import UserDetails from '../../common/UserDetail'

interface UserCardProps {
  user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const navigate = useNavigate()

  return (
    <Card>
      <CardActionArea onClick={() => navigate(`/users/${user.id}/albums`)}>
        <CardContent>
          <UserDetails userId={user.id!} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default UserCard

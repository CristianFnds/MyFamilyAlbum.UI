import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../api/AuthService'

interface MenuLateralProps {
  open: boolean
  onClose: () => void
}

const MenuLateral: FC<MenuLateralProps> = ({ open, onClose }) => {
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

  return (
    <Drawer anchor="left" open={open} onClose={onClose} variant="persistent">
      <div>
        <IconButton onClick={onClose}>
          <MenuOpenRoundedIcon />
        </IconButton>
      </div>
      <List sx={{ marginTop: 2 }}>
        <ListItem component={Link} to="/home">
          <ListItemText primary="My users" />
        </ListItem>
        <ListItem component={Link} to={`/users/${authUserId}/albums`}>
          <ListItemText primary="My user albums" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default MenuLateral

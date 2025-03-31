import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface MenuLateralProps {
  open: boolean
  onClose: () => void
}

const MenuLateral: FC<MenuLateralProps> = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose} variant="persistent">
      <div>
        <IconButton onClick={onClose}>
          <MenuOpenRoundedIcon />
        </IconButton>
      </div>
      <List sx={{ marginTop: 2 }}>
        <ListItem component={Link} to="/add-photo">
          <ListItemText primary="Add photo" />
        </ListItem>
        <ListItem component={Link} to="/meus-usuarios">
          <ListItemText primary="Meus Usuários" />
        </ListItem>
        <ListItem component={Link} to="/my-album">
          <ListItemText primary="Meus Álbuns" />
        </ListItem>
        <ListItem component={Link} to="/minhas-fotos">
          <ListItemText primary="Minhas Fotos do Álbum" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default MenuLateral

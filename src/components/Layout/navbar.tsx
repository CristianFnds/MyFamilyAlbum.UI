import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../../api/AuthService'

const Navbar = ({
  onMenuClick,
  menuOpen,
}: {
  onMenuClick: () => void
  menuOpen: boolean
}) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    navigate('/')
  }

  const user = authService.getUser()

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            {menuOpen ? <MenuIcon /> : <MenuOpenRoundedIcon />}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/home"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            My Family Album
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              {user.name}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', mt: 8 }}></Box>
    </>
  )
}

export default Navbar

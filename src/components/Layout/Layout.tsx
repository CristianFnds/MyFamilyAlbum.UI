import { Box, Container } from '@mui/material'
import { ReactNode, useState } from 'react'
import Navbar from './navbar'
import MenuLateral from './sidebar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar onMenuClick={handleMenuToggle} menuOpen={menuOpen} />
      <MenuLateral open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Container
        sx={{
          flexGrow: 1,
          padding: 8,
          transition: 'margin 0.3s ease-in-out',
          marginLeft: menuOpen ? '240px' : '0',
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default Layout

import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import authService from '../../api/AuthService'
import styles from './Login.module.css'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.fromPrivateRoute) {
      setError(
        'You need to be logged in to access this page. Please select a valid email.'
      )
      window.history.replaceState({}, '')
    }
  }, [location.state])

  const loginSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      await authService.login({ email, password })
      navigate('/home')
    } catch (error: any) {
      console.error('Error during login:', error.message)
      setError('Login failed. Please check your credentials.')
    }
  }

  return (
    <div className={styles.container}>
      <Container maxWidth="sm">
        <Paper elevation={3} className={styles.formContainer}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" onSubmit={loginSubmit} className={styles.form}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Alert severity="error" style={{ marginTop: '10px' }}>
                {error}
              </Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={styles.button}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  )
}

export default LoginPage

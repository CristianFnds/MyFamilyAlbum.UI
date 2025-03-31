import { Navigate, Outlet } from 'react-router-dom'
import authService from '../../api/AuthService'

const PrivateRoute = () => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/" state={{ fromPrivateRoute: true }} />
  }
  return <Outlet />
}

export default PrivateRoute

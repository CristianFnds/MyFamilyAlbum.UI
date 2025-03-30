import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PrivateRoute from './components/privateRoute'
import Login from './pages/Auth/Login'
import HomePage from './pages/Home/Home'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PrivateRoute from '../components/common/privateRoute'
import AlbumPhotos from '../components/features/AlbumPhotos'
import UserAlbums from '../components/features/UserAlbums'
import Login from '../pages/Auth/Login'
import HomePage from '../pages/Home/Home'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/users/:userId/albums" element={<UserAlbums />} />
          <Route
            path="/users/:userId/albums/:albumId/photos"
            element={<AlbumPhotos />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes

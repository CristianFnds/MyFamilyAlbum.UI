import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import PrivateRoute from '../components/common/privateRoute'
import UserAlbums from '../pages/Albums/UserAlbumPage'
import Login from '../pages/Auth/LoginPage'
import HomePage from '../pages/Home/HomePage'
import AlbumPhotos from '../pages/Photos/AlbumPhotosPage'

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

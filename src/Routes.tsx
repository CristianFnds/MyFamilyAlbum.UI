import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AlbumPhotos from './components/AlbumPhotos'
import PrivateRoute from './components/privateRoute'
import UserAlbums from './components/UserAlbums'
import AddPhoto from './pages/AddPhoto'
import Login from './pages/Auth/Login'
import HomePage from './pages/Home/Home'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-photo" element={<AddPhoto />} />
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

import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import Login from '../pages/auth/Login'
import PublicRoute from './PublicRoute'
import { routePath } from '../constant/routes'
import Home from '../pages/dashboard/Home'
import AboutUs from '../pages/about/AboutUs'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}></Route>
        <Route element={<PublicRoute />}>
          <Route path={routePath.LOGIN} element={<Login />} />
          <Route path="/" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes

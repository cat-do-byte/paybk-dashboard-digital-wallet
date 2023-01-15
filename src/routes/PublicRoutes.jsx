import { Routes, Route } from "react-router-dom"
import loadable from "@loadable/component"

const Login = loadable(() => import("../pages/login/Login"))

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  )
}

export default PublicRoutes

import { Routes, Route } from "react-router-dom"
import Login from "../pages/login/Login"

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  )
}

export default PublicRoutes

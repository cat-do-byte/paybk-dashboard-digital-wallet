import { Routes, Route } from "react-router-dom"
import LayoutDashboard from "../layouts/LayoutDashboard"
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound"
import PublicRoutes from "./PublicRoutes"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route element={<LayoutDashboard />}>
          <Route path="/dashboard" index element={<Dashboard />} />
        </Route>
        <Route path="user/*" element={<PublicRoutes />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes

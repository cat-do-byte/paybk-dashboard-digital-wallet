import { Routes, Route } from "react-router-dom"
import loadable from "@loadable/component"

const LayoutDashboard = loadable(() => import("../layouts/LayoutDashboard"))
const Dashboard = loadable(() => import("../pages/Dashboard"))
const NotFound = loadable(() => import("../pages/NotFound"))
const PublicRoutes = loadable(() => import("./PublicRoutes"))

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

// import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const LayoutDashboard = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      <h4>This is footerrr</h4>
    </>
  )
}

export default LayoutDashboard

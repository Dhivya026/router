import { Outlet } from "react-router-dom"
import Navbar from "../pages/components/Navbar"

  

const RootLayout = () => {
  return (
      <>
      <Navbar/>
      <Outlet/>

      </>
  )
}

export default RootLayout
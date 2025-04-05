import { Outlet } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"

const Home = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home
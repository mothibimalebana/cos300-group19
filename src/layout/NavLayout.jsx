import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import '../css/NavLayout.css'
const NavLayout = () => {
    return(
        <div className="nav-layout">
            <Nav/>
            <main>
            <Outlet/>
            </main>
        </div>
    )
}

export default NavLayout
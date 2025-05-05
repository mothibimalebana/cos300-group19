import { Link } from 'react-router-dom'
import '../css/Nav.css'

const Nav = () => {
    return(
        <>
            <div className="nav-container flex justify-between items-center">
                <div className="left flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="53" viewBox="0 0 54 53" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3944 33.125V6.625L3.93311 13.25V39.75L26.8376 53L38.299 46.375L15.3944 33.125Z" fill="#161616"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8372 26.5L49.7417 39.75V26.5L38.2985 19.875V6.625L26.8372 0V26.5Z" fill="#161616"/>
                    </svg>
                    <h5>Gr<span className="ou">ou</span>p19</h5>
                </div>
                <div className="right flex gap-15">
                    <Link to="/dashboard" className="buttons">Dashboard</Link>
                    <Link to="/projects" className="buttons">Projects</Link>
                    <Link to="/reporint-analytics" className="buttons">Reportings & Alerts</Link>
                </div>
            </div>
        </>
    )
}

export default Nav
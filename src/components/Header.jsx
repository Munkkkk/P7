import logoheader from "../assets/bannerlogo.png"
import "../styles/header.css"
import { Link } from "react-router-dom"


function Header() {
    return <div className="container">
        <img src={logoheader} alt="logo kasa" className="logo" />
        <nav>
            <ul className="nav">
                <li className="nav-link">
            <Link className='link-acceuil' to='/' >
            Accueil
            </Link>
            </li>
            <li className="nav-link">
            <Link className="link-about" to='/About'>
            A propos
            </Link>
            </li>
            </ul>
        </nav>
    </div>
} 


export default Header
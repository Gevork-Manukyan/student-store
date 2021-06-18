import './Navbar.css'
import { Link } from "react-router-dom";



function Navbar () {
    return (
        <div className="Navbar">
            <div className="navbar-wrapper">
                <ul className="links">
                    <li><Link to="/" >Home</Link></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a href="/#buyNow">Buy Now</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
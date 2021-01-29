import { Link } from "react-router-dom";
import './css/style.css'



const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Saloon</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/create">Services</Link>
                <Link to="/workers">About</Link>
                <Link to="/appointment">Appointment</Link>
            </div>
        </nav>
    );
}

export default Navbar;

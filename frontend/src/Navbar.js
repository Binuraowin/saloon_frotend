import { Link } from "react-router-dom";
import './css/style.css'



const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Saloon</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link className="appointment" to="/appointment">Appointment</Link>
            </div>
        </nav>
    );
}

export default Navbar;

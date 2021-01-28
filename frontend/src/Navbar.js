import { Link } from "react-router-dom";
import './css/style.css'



const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Saloon</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"pink",
                    backgroundColor:"green",
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;

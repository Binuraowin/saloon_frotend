import { Link } from "react-router-dom";
import './css/style.css'


const Navbar = () => {
    return (
        // <nav className="navbar">
        //     <h1>The Blog</h1>
        //     <div className="links">
        //         <Link to="/">Home</Link>
        //         <Link to="/create" style={{
        //             color:"pink",
        //             backgroundColor:"green",
        //         }}>New Blog</Link>
        //     </div>
        // </nav>

    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
            <Link className="navbar-brand" to="/">Haircare</Link>
            {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"*/}
            {/*        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*    <span className="oi oi-menu"></span> Menu*/}
            {/*</button>*/}

            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
                    <li className="nav-item active"><Link to="/gallery" className="nav-link">Gallery</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/blog" className="nav-link">Appointment</Link></li>

                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;

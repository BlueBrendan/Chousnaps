import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <Link to="/">HOME</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </div>
    )
}
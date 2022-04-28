import logo from './resources/pitch_logo.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="links">
                <nav>
                    <Link to="/">מגרשים</Link>
                    <Link to="/add_field">הוספת מגרש</Link>
                </nav>
            </div>
            <Link to="/">
                <img src={logo} alt="logo of company" className="pitch-logo" />
            </Link>
        </nav>
    );
}
 
export default Navbar;